/** @license MIT */

/**
 * Uncomment to run in Node.
 *
 * @todo
 * Modify enable-browser-mode CLI to do this.
 */
// import 'enable-browser-mode';

/** Import rendered exe widget. */
import page from '../lib/page.js';

/** Log HTML. */
console.log(page.build().html);
