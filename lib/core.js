/**
 * @license MIT
 */
/**
 * @fileoverview
 * Defines top-level config variables, as well as `Widget` and `StatefulWidget`
 * classes.
 */

import {
  debugLog,
  CACHED_CLASSNAMES,
  CLASS_DATA,
  DEBUG,
  PRODUCTION,
  STYLESHEET,
} from './globals.js';

/**
 * Add global stylesheet to the DOM and make CSSStyleSheet.sheet available. This
 * will be where styles are cached.
 */
debugLog('Adding Stylesheet...');
document.head.appendChild(
    STYLESHEET,
);

/**
 * Either a `Widget` or a `string` (which will be coerced to a `TextNode`).
 *
 * @typedef {Widget|string} WidgetLike
 */
export let WidgetLike;

/**
 * Allows for Widget mixins, so that we can extend multiple Widgets at once.
 * Returns a `Widget` constructor.
 *
 * @exportSymbol
 * @param  {...Function} classes
 * @example
 *  class ElevatedColumn extends Mix(Column, Elevation2) {
 *      ...
 *  }
 */
/**
 * @param {...?} classes
 * @class
 */
export function Mix(...classes) {
  const mixed = class extends Widget {
    /**
     * Inherit from a set of classes.
     *
     * @param  {...?} classes The classes to inherit from.
     */
    static inheritClasses(...classes) {
      this.classesToInherit.push(...classes);
    }

    /**
     * Get the classNames for the new class.
     *
     * @return {Array<string>}
     */
    static get classNames() {
      super.cacheStyles();
      return [
        this.name,
        ...this.classesToInherit,
      ];
    }
  };

  mixed.classesToInherit = [];

  for (const mixClass of classes) {
    mixed.inheritClasses(...mixClass.classNames);
  }

  return mixed;
}

/**
 * An abstract class which will pass down static properties to classes that
 * extend it, and cache class-level styles with CSS. Presently, this is done
 * with static getters, but if/when [TC39 class fields
 * proposal](https://github.com/tc39/proposal-class-fields) reaches stage 4,
 * static public fields can be used instead. This has been supported in V8
 * [since 2018](https://v8.dev/features/class-fields#public-class-fields), but
 * Closure Compiler cannot compile the pattern, so it is [presently
 * unsupported](https://github.com/google/closure-compiler/issues/2731#issuecomment-647695017).
 *
 *
 * Static members below, such as `Inheritable.attributes`,
 * `Inheritable.classNames`, etc. can be overridden on local instances, where
 * the inherited properties act as defaults. In essence, a `new Inheritable`
 * will inherit `Inheritable.classNames`, but can be modified to have different
 * local `classNames` than its constructor's defaults.
 *
 * The `Widget` class relies on `Inheritable` behavior to allow subclassing and
 * overrides.
 *
 * @abstract
 * @category Core
 * @example
 * // overriding metadata
 * class InheritableOverride extends Inheritable {
 * static get styles() {
 * return `
 * background-color: red;
 * `;
 * }
 * }
 *
 * // TC39:
 * // class InheritableOverride extends Inheritable {
 * //      static styles = `
 * //          background-color: red;
 * //      `;
 * // }
 *
 * class Child extends InheritableOverride {}
 * console.log(Child.classNames, Child.styles.trim());
 * // ["Child", "InheritableOverride", "Inheritable"]
 * // "background-color: red;"
 */
export class Inheritable {
  /**
   * Create a new `Inheritable`.
   */
  constructor() {
    /**
     * Inherits from static `tag`. The local `tag` for this `Inheritable`.
     *
     * @type {string}
     */
    this.tag = this.constructor.tag.slice(0);

    /**
     * The local `attributes` for this `Inheritable`. Inherits from static
     * `attributes`.
     *
     * @type {Object<string, ?>}
     */
    this.attributes = { ...this.constructor.attributes };

    /**
     * The local `classNames` for this `Inheritable`. Inherits from static
     * `classNames`.
     *
     * @type {Array<string>}
     */
    this.classNames = this.constructor.classNames.slice(0);
  }

  /**
   * The inheritable default `tag` for instances of this class.
   *
   * @type {string}
   */
  static get tag() {
    return '';
  }

  /**
   * The inheritable default `attributes` for instances of this class.
   *
   * @type {Object}
   */
  static get attributes() {
    return {};
  }

  /**
   * All inherited default `classNames` for this class.
   *
   * @type {Array<string>}
   */
  static get classNames() {
    /**
     * @type {string}
     */
    const className = this.name;
    if (className in CLASS_DATA) {
      debugLog('Hit cache for', className);
      return CLASS_DATA[className];
    }

    /**
     * @type {Array<string>}
     */
    const classNames = [className];
    const inheritedClasses = Object.getPrototypeOf(this).classNames;

    if (inheritedClasses) {
      classNames.push(
          ...inheritedClasses,
      );
    }

    this.cacheStyles();
    CLASS_DATA[className] = classNames;
    return classNames;
  }


  // eslint-disable-next-line valid-jsdoc
  /**
   * Cache a list of classNames which have been added to the CSSOM.
   *
   * @nocollapse
   * @return {typeof Inheritable} this
   */
  static cacheStyles() {
    const className = this.name;
    const styles = this.styles || '';

    debugLog('inside Inheritable cacheStyles for', this);

    if (
      styles &&
      STYLESHEET.sheet &&
      !CACHED_CLASSNAMES.includes(className)
    ) {
      if (DEBUG) {
        debugLog('caching styles for', className, styles);
      }

      const declaration = `.${className} {${styles}}`;
      STYLESHEET.sheet.insertRule(declaration);
      CACHED_CLASSNAMES.push(className);
    }

    return this;
  }
}

/**
 * The `Widget` class specifies an `Inheritable` which maps its values to an
 * `HTMLElement` using an instance method `build()`.
 *
 * Methods beginning with `set*`, i.e. `setStyles()`, will change a Widget's
 * *metadata*, whereas methods beginning with `apply*` will apply metadata to
 * `Widget.element`.
 *
 * The purpose of the `build()` method is to **apply** all of the Widget's
 * **metadata** to `Widget.element`.
 *
 * @category Core
 * @exportSymbol
 */
export class Widget extends Inheritable {
  /**
   * @param  {...WidgetLike} children The Widget's children. Strings map to
   * TextNodes.
   *
   * @example
   *  class MyHeader extends Widget {
   *      static get tag() {
   *          return 'h1';
   *      }
   *  }
   *
   *  MyHeader("Text").build().element;
   *  // <h1 class="myheader">Text</h1>
   */
  constructor(...children) {
    super();

    /**
     * An instance property containing the Widget's DOM element. `null` until
     * built.
     *
     * @type {Node}
     */
    this.element;

    /**
     * An instance property containing the Widget's children. Can be empty.
     *
     * @type {Array<WidgetLike>}
     */
    this.children = children;

    /**
     * This tag for this Widget instance's element.
     *
     * @type {string}
     */
    this.tag = this.constructor.tag || (
            PRODUCTION
                ? 'w'
                : this.constructor.name
    );

    /**
     * The classNames for this Widget instance, including inherited and manually
     * applied classes.
     *
     * @type {Array<string>}
     */
    this.classNames = this.constructor.classNames.slice(0) || [];

    /**
     * The attributes for this element, including inherited and manually applied
     * attributes.
     *
     * @type {Object<string, string>}
     */
    this.attributes = { ...this.constructor.attributes };

    /**
     * The local styles for this Widget instance, ONLY includes element-specific
     * styles.
     *
     * Styles for this class are stored in a CSS class rather than dumped into
     * the `style` attribute.
     *
     * @type {string}
     */
    this.styles = '';
  }

  /**
   * Dump `this.element` to string for SSR.
   *
   * @type {string}
   */
  get html() {
    return this.element.outerHTML;
  }

  /**
   * Get this Widget's styles as a string.
   *
   * @return {string}
   */
  static get styles() {
    return `
            box-sizing: border-box;
        
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
            background-attachment: scroll;
        `;
  }

  /**
   *
   * @param {string} property The CSS property to transition.
   *
   * @param {string|number} value The value to transition to.
   *
   * @param {string} transition Customize the transition curve.
   *
   * @return {Widget} this
   */
  animate(property, value, transition = '0.2s ease-in') {
    this.element.style.setProperty('transition', `${property} ${transition}`);
    this.element.style.setProperty(property, value);

    return this;
  }

  /**
   * Builds `child`, and appends the generated `child.element` to
   * `this.element`. Returns `this`.
   *
   * @param {Widget} child The child whose `Widget.element` will be appended.
   * `child` must be built before passing to `append`.
   *
   * @return {Widget} this
   */
  append(child) {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('append', arguments);

    child.build(),
    this.element.appendChild(child.element);

    return this;
  }

  /**
   * Apply attribute metadata in `this.attributes` to `this.element`. Returns
   * `this`.
   *
   * @return {Widget} this
   * @ignore
   */
  applyAttributes() {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('applyAttributes', arguments);

    if (this.attributes) {
      for (const [key, val] of Object.entries(this.attributes)) {
        this.element.setAttribute(key, val);
      }
    }

    return this;
  }

  /**
   * Apply class metadata in `this.classes` to `this.element`. Returns `this`.
   *
   * @return {Widget} this
   * @ignore
   */
  applyClasses() {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('applyClasses', arguments);
    const classNames = this.classNames;

    if (classNames.length) {
      this.element.className = classNames.join(' ');
    }

    return this;
  }

  /**
   * Apply style metadata in `this.styles` to `this.element`. Returns `this`.
   *
   * @ignore
   * @return {Widget} this
   */
  applyStyles() {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('applyStyles', arguments);

    if (this.styles) {
      this.element.setAttribute('style', this.styles);
    }

    return this;
  }

  /**
   * Build if `this.element` doesn't exist.
   *
   * @return {Widget} this
   */
  maybeBuild() {
    if (!this.element) this.build();
    return this;
  }

  /**
   * Build `this.element` based on the Widget's metadata and children.
   *
   * @return {Widget} this
   */
  build() {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('build', arguments);

    this.createElement()
        .applyAttributes()
        .applyClasses()
        .applyStyles();

    if (!this.children.length) return this;
    else {
      this.children.forEach(
          (child) => {
            this.append(
                    typeof child !== 'string'
                        ? child
                        : new TextNode(child),
            );
          });
    }

    return this;
  }

  /**
   * Initialize `this.element` using `this.tag`. Returns `this`.
   *
   * @return {Widget} this
   * @ignore
   */
  createElement() {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('createElement', arguments);

    const newElement = document.createElement(this.tag);
    return this.replaceElement(newElement);
  }

  /**
   * Log this Widget's HTML to stdout.
   *
   * @return {Widget} this
   */
  freeze() {
    console.log(`<!DOCTYPE html>${this.maybeBuild().html}`);
    return this;
  }

  /**
   * Render `this.element` into `target`. Returns `this`.
   *
   * @param {Node} target The DOM node which will be replaced with
   * `this.element`.
   *
   * @return {Widget} this
   */
  render(target = this.element) {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('render', arguments);

    if (!this.element) this.build();
    target.replaceWith(this.element);

    return this;
  }

  /**
   * Replace `this.element` with the given `node`. Returns `this`.
   *
   * @param {Node} node The DOM node to replace `this.element` with.
   *
   * @return {Widget} this
   */
  replaceElement(node) {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('replaceElement', arguments);

    if (!this.element) this.element = node;
    else this.element.replaceWith(node);

    return this;
  }

  /**
   * Replace Widget's element with a TextNode. Returns `this`.
   *
   * @param {string} text The content of the TextNode.
   *
   * @return {Widget} this
   */
  replaceText(text) {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('setTextNode', arguments);

    const newNode = document.createTextNode(text);
    return this.replaceElement(newNode);
  }

  /**
   * Set Widget attribute metadata. Returns `this`.
   *
   * @param {Object<String, ?>} attributes
   * @return {Widget} this
   */
  setAttributes(attributes = {}) {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('setAttributes', arguments);

    Object.assign(this.attributes || {}, attributes);
    return this;
  }

  /**
   * Set Widget class metadata. Returns `this`.
   *
   * @param  {...string} args Class names.
   *
   * @return {Widget} this
   */
  setClasses(...args) {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('setClass', arguments);

    this.classNames.push(...args);
    return this;
  }

  /**
   * Set Widget style metadata. Returns `this`.
   *
   * @param {string} styles A key-value map of styles.
   *
   * @return {Widget} this
   */
  setStyles(styles) {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('setStyles', arguments);

    this.styles += styles;
    return this;
  }
}

/**
 * @category Widgets
 * @extends Widget
 */
export class TextNode extends Widget {
  /**
   * Initialize a TextNode with the given `text`.
   *
   * @param {string} text The content of the textNode.
   */
  constructor(text) {
    super();
    this.text = text;
  }

  /**
   * Render the `TextNode`.
   *
   * @return {Widget} this
   */
  build() {
    return this.replaceText(this.text);
  }
}
