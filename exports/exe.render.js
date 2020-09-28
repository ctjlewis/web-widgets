/** @license MIT */

/**
 * Export all Widget constructors in current state. This ensures Closure
 * Compiler name mangling is consistent across files.
 */
// export * from './widgets.js';

/**
 * Render the page and add the initState script.
 */
import { default as page } from './exe.namespace.js';
// import { DebugScript } from './exe.namespace.js';

/**
 * Render page and export.
 */
if (!window['NO_RENDER']) page.render();
// export default (
//   window['NO_RENDER']
//     ? page
//     : page.append(
//         new DebugScript(
//             'exports/exe.namespace.js',
//             'dist/exe.namespace.js',
//         ),
//     ).render()
// );
