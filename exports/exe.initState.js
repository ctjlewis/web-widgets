/** @license MIT */

// import { StatefulWidget } from '../lib/core.js';
import { debugLog } from '../lib/globals.js';
debugLog('inside initState');

/** Set a flag to not actually render when importing from the render script. */
window['NO_RENDER'] = true;

import {
  BodyWidget,
} from './exe.render.js';

debugLog(
    'Compiled BodyWidget name inside exe.initState.js:',
    BodyWidget.name,
);

/**
 * We need to render a frame in the blank state in order for CSS transitions to
 * work as expected; for the test page, this is just a fade-in animation.
 *
 * The hydration process (`Widget.from`) sometimes renders so quickly that the
 * frame `requestAnimationFrame` gives us is the *first* frame, i.e. the first
 * paint will contain the page in its *final* landing state, leading to the
 * initial CSS transition not firing.
 *
 * Double-wrapping with rAF is ugly but necessary in this unique case, to ensure
 * there is a first paint to transition *from* for any first-frame transitions.
 */
requestAnimationFrame(
    () => {
      requestAnimationFrame(
          () => {
            const body = BodyWidget.from(document.body);
            body.initState();
          },
      );
    },
);
