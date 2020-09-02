/**
 * @license MIT
 */
/**
 * @fileoverview
 * Plugins for generating dist/ output with Rollup.
 */

import builtinModules from 'builtin-modules';
import { readPackageJson } from '../package.js';

const packageJson = readPackageJson();
const peerDeps = Object.keys(packageJson.peerDependencies || {});
const gnvDeps = Object.keys(packageJson.gnvDependencies || {});

export const disabledModules = [
  'fsevents',
];

export const distExternal = [
  /**
   * Builtins and manually disabled packages.
   */
  ...builtinModules,
  ...disabledModules,
  /**
   * Package.json dependencies.
   */
  ...peerDeps,
];

export const devExternal = [
  ...distExternal,
  ...gnvDeps,
];
