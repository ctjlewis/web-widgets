/** @license MIT */
/**
 * @fileoverview
 * Globals to be overridden at compile-time.
 */

/**
 * Override `goog` global when run outside of compiler.
 */
if (typeof goog === 'undefined') {
  const polyfill = {
    define: (n, v) => v,
  };

  if (typeof global !== 'undefined') global.goog = polyfill;
  else if (typeof window !== 'undefined') window.goog = polyfill;
}

/**
 * Compiler-level constant that informs CC whether or not to rename tag names.
 * Override in Closure Compiler with `--define='PRODUCTION=true'`.
 *
 * @define {boolean}
 */
export var PRODUCTION = goog.define('PRODUCTION', false);

/**
 * Whether or not to log debug messages. Compiler overrides to false.
 *
 * @define {boolean}
 */
export var DEBUG = goog.define('DEBUG', true);

/**
 * Top-level CSS which should apply to any webpage.
 */
export const VIEWPORT_CSS = `
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    font-size: 100%;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
`;

/**
 * Create an element with a given ID.
 *
 * @param {string} tag
 * @param {string} id
 *
 * @return {Element}
 */
export const createElementWithId = (tag, id) => {
  const el = document.createElement(tag);
  el.id = id;
  return el;
};

/**
 * The stylesheet that will hold all styles for this page.
 *
 * @type {Element}
 */
export const STYLESHEET = createElementWithId('style', 'ww-stylesheet');

/**
 * List of cached classNames for this run.
 *
 * @type {Array<string>}
 */
export const CACHED_CLASSNAMES = [];

/**
 * Cached CSS class data.
 *
 * @type {Object<string, Array<string>>}
 */
export const CLASS_DATA = {};

/**
 * For storing performance TIMES if necessary.
 *
 * @type {Array<number>}
 */
export const TIMES = [];

/**
 * @ignore
 * @param {...?} args
 * @return {void}
 */
export const debugLog = (...args) => {
  if (DEBUG) console.log(...args);
};


/**
 * De-anonymize a Closure Compiler name-mangled object method.
 *
 * @param {Object!} obj
 * The object whose enumerable properties will be searched.
 *
 * @param {Function} methodRef
 * The reference to a function which may or may not be a method on the object.
 *
 * @return {string?}
 * The property name of the matched method, undefined if no match.
 */
export function deanonymize(obj, methodRef) {
  /**
   * Return methodReference ES6 `.name` if exists.
   */
  if (methodRef.name) return methodRef.name;
  /**
   * Else, search the object for a reference match.
   */
  else for (const key in obj) if (obj[key] === methodRef) return key;
  /**
   * Null if no match.
   */
  return null;
}
