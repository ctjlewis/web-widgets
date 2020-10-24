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
 * Whether or not this is compiled release output in the dist/ directory.
 *
 * @define {boolean!}
 */
export var RELEASE = goog.define('RELEASE', false);

/**
 * Whether or not the compiled export is a namespace.
 *
 * @define {boolean!}
 */
export var NAMESPACE = goog.define('NAMESPACE', false);

/**
 * Compiler-level constant that informs CC whether or not to rename tag names.
 * Override in Closure Compiler with `--define='PRODUCTION=true'`.
 *
 * @define {boolean!}
 */
export var COMPILED = goog.define('COMPILED', false);

/**
 * Whether or not to log debug messages. Compiler overrides to false.
 *
 * @define {boolean!}
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
 * A string containing all the CSS class definitions for the global scope.
 *
 * @type {Array<string>!}
 */
export const GLOBAL_STYLES = [];

/**
 * List of cached classNames for this run.
 *
 * @type {Array<string>!}
 */
export const CACHED_CLASSNAMES = [];

/**
 * Cached CSS class data.
 *
 * @type {Object<string, Array<string>>!}
 */
export const CLASS_DATA = {};

/**
 * @ignore
 * @param {...?} args
 * @return {void}
 */
export const debugLog = (...args) => {
  if (DEBUG) console.log(...args);
};

/**
 * De-reference a Closure Compiler name-mangled object method.
 *
 * @param {Object!} obj
 * The object whose enumerable properties will be searched.
 *
 * @param {Function!} propRef
 * The reference to a function which may or may not be a method on the object.
 *
 * @return {string?}
 * The property name of the matched method, undefined if no match.
 */
export const dereference = (obj, propRef) => {
  /**
   * Return methodReference ES6 `.name` if exists.
   */
  if (propRef.name) return propRef.name;
  /**
   * Else, search the object for a reference match.
   */
  else for (const key in obj) if (obj[key] === propRef) return key;
  /**
   * Null if no match.
   */
  return null;
};

/**
 * Compile a list of style declarations to a formatted string.
 *
 * @param {Array<string!>!} styles
 * @return {string!}
 */
export const serializeStyles = (styles) => (
  styles.join(';').replace(/(\s{2,}|\n+)/g, ' ').trim()
);
