/** @license MIT */
/**
 * @fileoverview
 * Globals to be overridden at compile-time.
 */
if (typeof goog === 'undefined' && typeof global !== 'undefined') {
  global.goog = {
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
