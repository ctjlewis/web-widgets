/** @license MIT */

/**
 * Import page from namespace and render.
 */
import { debugLog } from '../lib/globals.js';
import { default as page } from './exe.namespace.js';

if (globalThis['NO_RENDER'])
  debugLog('NO_RENDER flag detected - skipping render.');
else
  page.render(document.documentElement);
