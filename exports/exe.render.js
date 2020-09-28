/** @license MIT */

/**
 * Export all Widget constructors in current state. This ensures Closure
 * Compiler name mangling is consistent across files.
 */
export * from './widgets.js';

/**
 * Render the page and add the initState script.
 */
import page from '../lib/page.js';
import { DebugScript } from './widgets.js';

/**
 * Render page and export.
 */
export default (
  window['NO_RENDER']
    ? page
    : page.append(
        new DebugScript(
            'exports/exe.initState.js',
            'dist/exe.initState.js',
        ),
    ).render()
);

/**
 * For binding to window in dev mode.
 */
import * as widgets from './widgets.js';
import * as globals from '../lib/globals.js';
import * as devWidgets from '../lib/page.js';

import { DEBUG, debugLog } from '../lib/globals.js';

/**
 * If dev mode, assign all exports to the global object and cache all styles.
 */
if (DEBUG) {
  /**
   * Assign all to `window`.
   */
  debugLog('[DEV MODE] Exporting modules to window object...');
  Object.assign(window, globals);
  Object.assign(window, devWidgets);
  Object.assign(window, widgets);

  /**
   * Cache all styles.
   */
  debugLog('[DEV MODE] Caching styles for all Widgets...');
  const widgetClasses = [
    ...Object.values(devWidgets),
    ...Object.values(widgets),
  ].filter(Boolean);

  for (const widgetClass of widgetClasses) {
    if (widgetClass.exportStyles) widgetClass.exportStyles();
  }
}
