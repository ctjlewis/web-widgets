/**
 * @license MIT
 */
/**
 * @fileoverview
 * Defines the core Widget classes.
 */

import {
  CACHED_CLASSNAMES,
  DEBUG,
  EXECUTABLE,
  GLOBAL_STYLES,
  deanonymize,
  debugLog,
  serializeStyles,
} from './globals.js';

/**
 * Either a `Widget` or a `string` (which will be coerced to a `TextNode`).
 *
 * @typedef {Widget|StatefulWidget|string|number} WidgetLike
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

    static styleString = classes.map((c) => c.styles).join('\n');

    static get attributes() {
      const attrs = {};
      for (const c of classes) Object.assign(attrs, c.attributes);
      return attrs;
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
     * @type {string!}
     */
    this.tag = this.constructor.tag;

    /**
     * The local `attributes` for this `Inheritable`.
     *
     * @type {Object<string!, ?>!}
     */
    this.attributes = { ...this.constructor.attributes };

    /**
     * The local `classNames` for this `Inheritable`.
     *
     * @type {Array<string!>!}
     */
    this.classNames = [ ...this.constructor.classNames ];
  }

  /**
   * The inheritable default `attributes` for instances of this class.
   *
   * @type {Object!}
   */
  static attributes = {};

  /**
   * The inheritable default `tag` for instances of this class. Do not define
   * in production mode.
   *
   * LEAVE AS GETTER FOR `extends` FUNCTIONALITY (RELIES ON `this`).
   *
   * @type {string!}
   */
  static get tag() {
    return EXECUTABLE ? '' : this.name;
  }

  /**
   * Get all inherited classes for this Widget.
   *
   * This needs to stay a getter so that `this` will refer to any constructors
   * that extend this class. Child classes will inherit `this` for fields.
   *
   * LEAVE AS GETTER FOR `extends` FUNCTIONALITY (RELIES ON `this`).
   *
   * @return {Array!}
   */
  static get inheritedClasses() {
    return Object.getPrototypeOf(this).classes || [];
  }

  /**
   * The inherited constructors for this class.
   *
   * LEAVE AS GETTER FOR `extends` FUNCTIONALITY (RELIES ON `this`).
   *
   * @return {Array<Function!>!}
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
   * LEAVE AS GETTER FOR `extends` FUNCTIONALITY (RELIES ON `this`).
   *
   * @type {Array<string!>!}
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
 * `Node` using an instance method `build()`.
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
   *      static tag = 'h1';
   *  }
   *
   *  MyHeader("Text").build().element;
   *  // <h1 class="myheader">Text</h1>
   */
  constructor(...children) {
    super();

    /**
     * Export to global namespace so that we can reference the constructor via
     * window[widgetClass], where `widgetClass` refers to the value of the
     * `constructor` attribute on the element.
     *
     * @todo
     * Move to render().
     */
    if (!(this.constructor.name in window))
      window[this.constructor.name] = this.constructor;

    /**
     * Whether or not the widget is being hydrated from a DOM node.
     *
     * @type {boolean!}
     */
    this.hydrated = false;

    /**
     * Whether or not the widget is being frozen.
     *
     * @type {boolean!}
     */
    this.frozen = false;

    /**
     * Event listeners to bind after `render()`.
     *
     * @type {Array<Array!>!}
     */
    this.listeners = [];

    /**
     * An instance property containing the Widget's DOM element. `null` until
     * built.
     *
     * @type {Node|null!}
     */
    this.element = null;

    /**
     * An instance property containing the Widget's children. Can be empty.
     *
     * @type {Array<WidgetLike!>!}
     */
    this.children = children;

    /**
     * This tag for this Widget instance's element. Use 'w' in production,
     * unless overridden.
     *
     * @type {string!}
     */
    this.tag = this.constructor.tag || (
            EXECUTABLE
                ? 'w'
                : this.constructor.name
    );

    /**
     * The list of local styles for this widget.
     */
    this.styles = [];
  }

  /**
   * A list of CSS styles for this class.
   *
   * @type {Array<string!>!}
   */
  static styles = [
    'transition: all 1s ease-in-out',
    'box-sizing: border-box',
  ];

  /**
   * Add these styles to the `GLOBAL_STYLES` object and add the className to the
   * `CACHED_CLASSNAMES` object.
   *
   * @nocollapse
   * @return {void}
   */
  static exportStyles() {
    const className = this.name;
    const serialized = serializeStyles(this.styles);

    debugLog('exportStyles for', className);

    /** Skip if tree is cached for this class. */
    if (CACHED_CLASSNAMES.includes(className)) {
      debugLog('Styles for', className, 'already exported. Skipping.');
      return;
    }

    /** Otherwise, if there are styles to add, add them. */
    else if (serialized) {
      debugLog('exporting styles for', className, serialized);
      const declaration = `.${className} {${serialized}}`;

      // STYLESHEET.sheet.insertRule(declaration);
      GLOBAL_STYLES.push(declaration);
      CACHED_CLASSNAMES.push(className);
    }

    /** Export the styles for all parent classes. */
    this.inheritedClasses.forEach((constr) => constr.exportStyles());
  }

  /**
   * Initialize a Widget of a given type from an HTMLElement.
   *
   * @nocollapse
   * @param {Element!} el
   * @return {Widget|StatefulWidget!}
   */
  static from(el) {
    debugLog('generating', this.name, 'from', el);

    /**
     * Initialize a new instance of this class.
     */
    const that = new this();
    const attributeMap = {};
    const reservedAttrs = [
      'class',
      'style',
    ];

    /**
     * Set the `hydrated` flag.
     */
    that.hydrated = true;

    /**
     * Bind element and metadata..
     */
    that.element = el;
    that.tag = el.tagName.toLowerCase();
    that.classNames = Array.from(el.classList);

    /**
     * Bind attrs.
     */
    for (const attribute of Array.from(el.attributes)) {
      const attrName = attribute.name;
      const attrVal = attribute.value;

      if (!reservedAttrs.includes(attrName))
        attributeMap[attrName] = attrVal;
    }

    that.setAttributes(attributeMap);
    return that;
  }

  /**
   * Bind all eventListeners to `this.element`.
   *
   * @return {Widget|StatefulWidget!} this
   */
  bindListeners() {
    if (this.element)
      for (const [ e, fn ] of this.listeners)
        this.element.addEventListener(e, fn);

    return this;
  }

  /**
   * Add an event listener to attach to the rendered DOM Node.
   *
   * @param {string} event
   * The name of the event to listen for, i.e. `'click'`.
   *
   * @param {Function} callback
   * The callback to bind.
   *
   * @return {Widget|StatefulWidget!} this
   */
  on(event, callback) {
    this.listeners.push([ event, callback ]);
    return this;
  }

  /**
   * Set styles and/or attributes for this widget.
   *
   * @param {Object} options
   * The styles and/or attributes to set.
   *
   * @return {Widget|StatefulWidget!} this
   */
  set(options = {}) {
    const styles = options.styles || [];
    const attributes = options.attributes || {};

    return this.setStyles(
        ...styles,
    ).setAttributes(
        attributes,
    );
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
   * @return {Promise<Widget>} this
   */
  async animate(property, value, transition = '0.2s ease-in') {
    await new Promise((resolve, reject) => {
      /** Paint on next frame. */
      requestAnimationFrame(() => {
        this.element.style.setProperty(
            'transform',
            `${property} ${transition}`,
        );

        this.element.style.setProperty(
            property,
            value,
        );

        resolve();
      });
    });

    return this;
  }

  /**
   * Apply attribute metadata in `this.attributes` to `this.element`. Returns
   * `this`.
   *
   * @return {Widget|StatefulWidget!} this
   * @ignore
   */
  applyAttributes() {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('applyAttributes', arguments);

    if (this.attributes)
      for (const [ key, val ] of Object.entries(this.attributes))
        this.element.setAttribute(key, val);

    return this;
  }

  /**
   * Apply class metadata in `this.classes` to `this.element`. Returns `this`.
   *
   * @return {Widget|StatefulWidget!} this
   * @ignore
   */
  applyClasses() {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('applyClasses', arguments);

    const classNames = this.classNames;

    if (classNames.length)
      this.element.className = classNames.join(' ');

    return this;
  }

  /**
   * Apply style metadata in `this.styles` to `this.element`. Returns `this`.
   *
   * @ignore
   * @return {Widget|StatefulWidget!} this
   */
  applyStyles() {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('applyStyles', arguments);

    /**
     * Replace any sequence of two or more whitespace characters OR any number
     * of newline characters with a single space, then trim.
     */
    const serialized = serializeStyles(this.styles);

    if (serialized)
      this.element.setAttribute('style', serialized);

    return this;
  }

  /**
   * Build `this.element` based on the Widget's metadata and children.
   *
   * @return {Widget|StatefulWidget!} this
   */
  build() {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('build', this.constructor.name);
    return this;
  }

  /**
   * Initialize `this.element` using `this.tag`. Returns `this`.
   *
   * @return {Widget|StatefulWidget!} this
   * @ignore
   */
  createElement() {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('createElement', arguments);

    const newElement = document.createElement(this.tag);
    this.element = newElement;

    return this;
  }

  /**
   * Encode this Widget as HTML.
   *
   * @return {string!}
   */
  freeze() {
    return this.freezeMode().render().element.outerHTML;
  }

  /**
   * Enable freeze mode.
   *
   * @return {Widget|StatefulWidget!} this
   */
  freezeMode() {
    this.frozen = true;
    return this;
  }

  /**
   * Even the stateless widget needs an empty `initState` method for
   * interoperability.
   */
  initState() {
    // this.build();
  }

  /**
   * Create an element at `this.element` and apply metadata.
   *
   * @return {Widget|StatefulWidget!} this
   */
  constructElement() {
    /**
     * Export all inheritable class styles to the global namespace.
     */
    this.constructor.exportStyles();

    return this
        .createElement()
        .applyAttributes()
        .applyClasses()
        .applyStyles();
  }

  /**
   * Render `this.element` into `target`. Returns `this`.
   *
   * @param {Node?} target
   * The DOM node which will be replaced with `this.element`.
   *
   * @return {Widget|StatefulWidget!} this
   */
  render(target = this.element) {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('Rendering', arguments);

    /** Handle build logic. */
    const that = this.build();

    /** Build out the top-level DOM node and render. */
    that.constructElement()
        .renderChildren();

    /** Render into `target`, this.element by default. */
    if (target) target.replaceWith(that.element);
    this.element = that.element;

    /** Add event listeners and return. */
    return that.bindListeners();
  }

  /**
   * Render this widget's children into `this.element`.
   *
   * @return {Widget|StatefulWidget!} this
   */
  renderChildren() {
    if (this.children.length)
      this.children.forEach((child) => {
        switch (typeof child) {
          case 'string':
          case 'number':
            child = new TextNodeTest(child.toString());
            break;
          case 'undefined':
          case 'null':
            return this;
            break;
        }

        /**
         * Flag child as frozen if we're freezing a layout.
         */
        if (this.frozen) child = child.freezeMode();

        /**
         * Append the rendered child.
         */
        this.element.appendChild(child.render().element);
      });

    return this;
  }

  /**
   * Replace `this.element` with the given `node`. Returns `this`.
   *
   * @param {Node} node The DOM node to replace `this.element` with.
   *
   * @return {Widget|StatefulWidget!} this
   */
  replaceElement(node) {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('replaceElement', arguments);

    if (this.element) this.element.replaceWith(node);
    else this.element = node;

    return this;
  }

  /**
   * Replace Widget's element with a TextNode. Returns `this`.
   *
   * @param {string} text The content of the TextNode.
   *
   * @return {Widget|StatefulWidget!} this
   */
  replaceText(text) {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('setTextNode', arguments);

    const newNode = document.createTextNode(text);
    return this.replaceElement(newNode);
  }

  /**
   * Set Widget attribute metadata. Set to `null` to delete. Returns `this`.
   *
   * @param {Object<String, ?>!} attributes
   * @return {Widget|StatefulWidget!} this
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
   * @return {Widget|StatefulWidget!} this
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
   * @param {...string!} styleStrings
   * A string of style data.
   *
   * @return {Widget|StatefulWidget!} this
   */
  setStyles(...styleStrings) {
    /* eslint-disable-next-line prefer-rest-params */
    if (DEBUG) debugLog('setStyles', arguments);

    this.styles.push(...styleStrings);
    return this;
  }
}


/**
 * A Widget with state.
 *
 * @extends Widget
 */
export class StatefulWidget extends Widget {
  /**
   * Create a new Widget with a state.
   *
   * @param {...?} args
   */
  constructor(...args) {
    super(...args);
    /**
     * Initialize a state.
     *
     * @type {Object!}
     */
    this.state = {};
    this.initState();
  }

  /**
   * Embed the state logic to `this.element` if the widget is being frozen.
   *
   * @return {StatefulWidget} this
   */
  embedStateLogicIfFrozen() {
    /**
     * For a freeze, embed the state logic for this widget, dereferencing
     * values to their compiled identifiers.
     */
    if (this.frozen) {
      const script = document.createElement('script');
      const sourceClass = this.constructor;

      const expression = (
        `(function(){` +
        `var el=document.currentScript.parentNode;` +
        `requestAnimationFrame(function(){` +
        `${sourceClass.name}` +
          `.${
            deanonymize(sourceClass, sourceClass.from)
          }(el)` +
          `.${
            deanonymize(sourceClass.prototype, sourceClass.prototype.render)
          }();});})();`
      );

      /** Append embedded script to `this.element`. */
      script.setAttribute('async', true);
      script.appendChild(document.createTextNode(expression));
      this.element.appendChild(script);
    }

    return this;
  }

  /**
   * Render this `StatefulWidget`.
   *
   * @param {Node?} target
   * The DOM Node to render into.
   *
   * @return {StatefulWidget}
   */
  render(target = this.element) {
    super.render(target);
    return this.embedStateLogicIfFrozen();
  }

  /**
   * Initialize this Widget's state, and descend down the tree.
   */
  initState() {}

  /**
   * Mutate the state.
   *
   * @param {function(Object)} fn
   * A function that accepts a state as an argument.
   *
   * @return {function()}
   */
  setState(fn) {
    return () => (fn(this.state), this.render());
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
   * @return {Widget|StatefulWidget!} this
   */
  build() {
    return this.replaceText(this.text);
  }
}

/**
 * A test TextNode replacement.
 */
export class TextNodeTest extends Widget {
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
   * @return {TextNodeTest} this
   */
  render() {
    this.element = document.createTextNode(this.text);
    return this;
  }
}
