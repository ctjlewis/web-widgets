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

/**
 * For binding to window in dev mode.
 */
// import * as globals from '../lib/globals.js';
// import * as devWidgets from '../lib/page.js';
// import { DEBUG, deanonymize, debugLog } from '../lib/globals.js';

/**
 * If dev mode, assign all exports to the global object and cache all styles.
 */
// if (DEBUG) {
//   /**
//    * Assign all to `window`.
//    */
//   debugLog('[DEV MODE] Exporting modules to window object...');
//   Object.assign(window, globals);
//   Object.assign(window, devWidgets);

//   /**
//    * Cache all styles.
//    */
//   debugLog('[DEV MODE] Caching styles for all Widgets...');
//   const widgetClasses = [
//     ...Object.values(devWidgets),
//     ...Object.values(widgets),
//   ].filter(Boolean);

//   for (const widgetClass of widgetClasses) {
//     if (widgetClass.exportStyles) widgetClass.exportStyles();
//   }
// }

// import { StatefulWidget } from '../lib/core.js';
// import { debugLog } from '../lib/globals.js';
// debugLog('inside initState');

/** Set a flag to not actually render when importing from the render script. */
// window['NO_RENDER'] = true;
// import './exe.render.js';

// import {
//   BodyWidget,
// } from './exe.render.js';

// debugLog(
//     'Compiled BodyWidget name inside exe.namespace.js:',
//     BodyWidget.name,
// );

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
// requestAnimationFrame(
//     () => {
//       requestAnimationFrame(
//           () => {
//             const body = BodyWidget.from(document.body);
//             body.initState();
//           },
//       );
//     },
// );
