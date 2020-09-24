/** @license MIT */

import page from '../lib/page.js';

/**
 * Render page and export.
 */
export default page.render();

/**
 * For binding to window in dev mode.
 */
import * as widgets from '../lib/widgets.js';
import * as globals from '../lib/globals.js';
import * as devWidgets from '../lib/page.js';

import { debugLog, PRODUCTION } from '../lib/globals.js';

/**
 * If dev mode, assign all exports to the global object and cache all styles.
 */
if (!PRODUCTION) {
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
  ];
  for (const widgetClass of widgetClasses) {
    if (widgetClass.exportStyles) widgetClass.exportStyles();
  }
}
