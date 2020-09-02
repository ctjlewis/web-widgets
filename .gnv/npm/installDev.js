/**
 * @license MIT
 */
/**
 * @fileoverview
 * Install this package's release and dev dependencies. Relies on package.js,
 * and cannot use any third party modules.
 */

import {
  PACKAGE_ROOT,
  install,
} from '../../package.js';

/**
 * Install this program, including development gnvDependencies.
 */
(async () => await install(PACKAGE_ROOT, {
  dev: true,
}))();
