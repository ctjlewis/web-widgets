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
  DEBUG,
  PRODUCTION,
  STYLESHEET,
} from './globals.js';

/**
 * A utility for making sure the DOM contains the ww-stylesheet <style> object.
 */
export const maybeInstallStylesheet = () => {
  if (!STYLESHEET.sheet) {
    document.head.appendChild(STYLESHEET);
  }
};

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
 * @example
 *  class ElevatedColumn extends Mix(Column, Elevation2) {
 *      ...
 *  }
 *
 * @param {...Function} classes
 * @class
 */
export function Mix(...classes) {
  return class extends Widget {
    static get classes() {
      const uniqueClasses = new Set([
        ...classes.map((c) => c.classes).flat(),
        ...super.classes,
      ]);
      return [ ...uniqueClasses ];
    }

    static get styles() {
      return classes.map((c) => c.styles).join('\n');
    }

    static get attributes() {
      const attrs = {};
      classes.forEach((c) => Object.assign(attrs, c.attributes));
    }
  };
}

/**
 * An abstract class which will pass down static properties to classes that
 * extend it, and cache class-level styles with CSS.
 *
 * @abstract
 * @category Core
 * @example
 */
export class Inheritable {
  /**
   * Create a new `Inheritable` and initialize local properties to defaults as
   * defined on the constructor.
   */
  constructor() {
    /**
     * The local `tag` for this `Inheritable`.
     *
     * @type {string}
     */
    this.tag = this.constructor.tag;

    /**
     * The local `attributes` for this `Inheritable`.
     *
     * @type {Object<string, ?>}
     */
    this.attributes = { ...this.constructor.attributes };

    /**
     * The local `classNames` for this `Inheritable`.
     *
     * @type {Array<string>}
     */
    this.classNames = [ ...this.constructor.classNames ];
  }

  /**
   * The inheritable default `tag` for instances of this class. Do not define
   * in production mode.
   *
   * @type {string}
   */
  static get tag() {
    if (!PRODUCTION) return this.name;
  }

  /**
   * The inheritable default `attributes` for instances of this class.
   *
   * @type {Object}
   */
  static get attributes() {
    return {};
  }

  static get inheritedClasses() {
    return Object.getPrototypeOf(this).classes || [];
  }

  /**
   * The inherited constructors for this class.
   *
   * @return {Array<Function>!}
   */
  static get classes() {
    const uniqueClasses = new Set([ this, ...this.inheritedClasses ]);
    /** Remove Inheritable for serialization. */
    const removeInheritable = [ ...uniqueClasses ].filter(
        (c) => c !== Inheritable,
    );
    return [ ...removeInheritable ];
  }

  /**
   * All inherited default `classNames` for this class.
   *
   * @type {Array<string>}
   */
  static get classNames() {
    const uniqueNames = new Set(
        this.classes.map(
            (c) => c.name,
            // (c) => !PRODUCTION ? c.name : 'ww-' + c.name,
        ),
    );
    return [ ...uniqueNames ];
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
     * Export to global namespace.
     */
    window[this.constructor.name] = this.constructor;

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
     * This tag for this Widget instance's element. Use 'w' in production,
     * unless overridden.
     *
     * @type {string}
     */
    this.tag = this.constructor.tag || (
            PRODUCTION
                ? 'w'
                : this.constructor.name
    );

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
    `;
  }

  /**
   * Cache a list of classNames which have been added to the CSSOM.
   *
   * @nocollapse
   * @return {void}
   */
  static exportStyles() {
    const className = this.name;
    const styles = this.styles || '';

    debugLog('exportStyles for', className);

    /** Ensure STYLESHEET is loaded into the DOM. */
    maybeInstallStylesheet();

    /** Skip if tree is cached for this class. */
    if (CACHED_CLASSNAMES.includes(className)) {
      return debugLog('Styles for', className, 'already exported. Skipping.');
    }

    /** Otherwise, if there are styles to add, add them. */
    else if (styles) {
      debugLog('exporting styles for', className, styles);
      const declaration = `.${className} {${styles}}`;

      STYLESHEET.sheet.insertRule(declaration);
      CACHED_CLASSNAMES.push(className);

      /** Export the styles for all parent classes. */
      this.inheritedClasses.forEach((constr) => constr.exportStyles());
    }
  }

  /**
   * Initialize a Widget of a given type from an HTMLElement.
   *
   * @todo
   * Resolve type errors in Closure Compiler.
   *
   * @nocollapse
   * @param {Element} el
   * @return {Widget}
   */
  static from(el) {
    debugLog('generating widget from DOM', this.name, el);

    const widget = new this();
    const attributeMap = {};
    const ignoreAttrs = [
      'class',
      'style',
      // 'initState',
    ];

    /**
     * Bind element.
     */
    widget.element = el;

    /**
     * Bind tag.
     */
    widget.tag = el.tagName.toLowerCase();

    /**
     * Bind classNames.
     */
    widget.classNames = Array.from(el.classList);

    /**
     * Bind attrs.
     */
    for (const attribute of el.attributes) {
      const [ attrName, attrVal ] = [ attribute.name, attribute.value ];
      if (!ignoreAttrs.includes(attrName)) {
        attributeMap[attrName] = attrVal;
      }
    }

    widget.setAttributes(attributeMap);
    return widget;
  }

  /**
   * Animate a CSS property to a new value with a given transition.
   *
   * @param {string} property
   * The CSS property to transition.
   *
   * @param {string|number} value
   * The value to transition to.
   *
   * @param {string} transition
   * Customize the transition curve.
   *
   * @return {Widget} this
   */
  animate(property, value, transition = '0.2s ease-in') {
    /** Paint on next frame. */
    requestAnimationFrame(() => {
      this.element.style.setProperty('transition', `${property} ${transition}`);
      this.element.style.setProperty(property, value);
    });

    return this;
  }

  /**
   * Builds `child`, and appends the generated `child.element` to
   * `this.element`. Returns `this`.
   *
   * @param {WidgetLike} child
   * The child whose `Widget.element` will be appended. `child` must be built
   * before passing to `append`.
   *
   * @return {Widget} this
   */
  append(child) {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('append', arguments);

    /** Coerce non-Widget types. */
    switch (typeof child) {
      case 'string':
        child = new TextNode(child);
        break;
    }

    this.element.appendChild(child.maybeBuild().element);
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
      for (const [ key, val ] of Object.entries(this.attributes)) {
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
    /** Export all inheritable class styles. */
    this.constructor.exportStyles();

    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('build', this.constructor.name);

    this.createElement()
        .applyAttributes()
        .applyClasses()
        .applyStyles();

    if (!this.children.length) return this;
    else this.children.forEach((child) => this.append(child));

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
   * Encode this Widget as HTML.
   *
   * @return {string}
   */
  freeze() {
    return `<!DOCTYPE html>${this.maybeBuild().html}`;
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

    /** Ensure `this.element` is non-null. */
    this.maybeBuild();

    /** Render into `target`, this.element by default. */
    console.log('target:', target);
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
