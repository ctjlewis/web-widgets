/** @license MIT */
/**
 * @fileoverview
 * Initialize a page and build it, but do not render it. This will expose all
 * the used constructors in the global namespace, and will be what is sent to
 * Closure Compiler.
 */

/**
 * A stack for triggering initState calls.
 */
window.HYDRATE_STACK = [];

export { default } from '../lib/page.js';
export * from './widgets.js';
