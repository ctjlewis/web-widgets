/** @license MIT */

/**
 * Uncomment to run in Node.
 *
 * @todo
 * Modify enable-browser-mode CLI to do this.
 */

/** Import rendered exe widget. */
import page from '../lib/page.js';

/** Freeze Widget and dump to stdout. */
console.log(page.freeze());
