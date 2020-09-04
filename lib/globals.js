/** @license MIT */
/**
 * @fileoverview
 * Globals to be overridden at compile-time.
 */

/**
 * Override `goog` global when run outside of compiler.
 */
if (
  typeof goog === 'undefined' &&
  /** Use global for Node, window for browser. */
  (typeof global !== 'undefined' || typeof window !== 'undefined')
) {
  (window || global).goog = {
    define: (n, v) => v,
  };
}

/**
 * Compiler-level constant that informs CC whether or not to rename tag names.
 * Override in Closure Compiler with `--define='PRODUCTION=true'`.
 *
 * @define {boolean}
 */
export var PRODUCTION = goog.define('compiler.globals.PRODUCTION', false);

/**
 * Whether or not to log debug messages. Compiler overrides to false.
 *
 * @define {boolean}
 */
export var DEBUG = goog.define('compiler.globals.DEBUG', true);

/**
 * Top-level CSS which should apply to any webpage.
 */
export const TOP_LEVEL_CSS = `
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    font-size: 100%;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
`;

/**
 * Global flags and settings for the library.
 *
 * @exportSymbol
 */
export const WIDGETS_FLAGS = {
  PRODUCTION: PRODUCTION,

  /**
   * The start of this execution.
   *
   * @type {number}
   */
  // LOAD_START: performance.now(),

  /**
   * Will print debug statements if set to `true`.
   *
   * @type {boolean}
   */
  DEBUG: DEBUG,

  /**
   * The stylesheet that will hold all styles for this page.
   *
   * @type {Element}
   */
  STYLESHEET: document.createElement('style'),

  /**
   * List of cached classNames for this run.
   *
   * @type {Array<string>}
   */
  CACHED_CLASSNAMES: [],

  /**
   * Cached CSS class data.
   *
   * @type {Object<string, Array<string>>}
   */
  CLASS_DATA: {},

  /**
   * For storing performance WIDGETS_FLAGS.TIMES if necessary.
   *
   * @type {Array<number>}
   */
  TIMES: [],
};
