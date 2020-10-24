/** @license MIT */
/**
 * @fileoverview
 * Initialize a page and build it, but do not render it. This will expose all
 * the used constructors in the global namespace, and will be what is sent to
 * Closure Compiler.
 */

/**
 * Set a flag if the namespace is being compiled in freeze mode, to avoid
 * serializing styles and other side effects that are not needed when thawing a
 * frozen layout.
 */
// import { FROZEN } from '../lib/globals.js';
// if (FROZEN) window.FROZEN_NAMESPACE = true;

/**
 * Export the page that we're rendering and all defined widgets.
 */
export { default } from '../lib/page.js';
export * from './widgets.js';
