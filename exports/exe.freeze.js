/** @license MIT */

/**
 * Uncomment to run in Node.
 *
 * @todo
 * Modify enable-browser-mode CLI to do this.
 */

/** Import rendered exe widget. */
import page from '../lib/page.js';
import { DebugScript } from '../lib/widgets.js';

/** Set freeze flag. */
window['FREEZE_MODE'] = true;
window['NO_RENDER'] = true;

page.append(
    new DebugScript(
        'exports/exe.initState.js',
        'dist/exe.initState.js',
    ).setAttributes({
      type: 'module',
    }),
);

requestAnimationFrame(() => console.log(page.freeze()));
