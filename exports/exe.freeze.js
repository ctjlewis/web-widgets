/** @license MIT */

/**
 * Uncomment to run in Node.
 *
 * @todo
 * Modify enable-browser-mode CLI to do this.
 */

/** Import rendered exe widget. */
import page from '../lib/page.js';
import { Script } from '../lib/widgets.js';

const attrs = {
  src: 'dist/exe.initState.js',
};

// if (window.location.href.includes('.dev')) attrs.type = 'module';

page.build().append(
    new Script().setAttributes(attrs),
);

requestAnimationFrame(() => console.log(page.freeze()));
