/**
 * @license MIT
 */
/**
 * @fileoverview
 * Plugins for generating dist/ output with Rollup.
 */

import shebang from 'rollup-plugin-preserve-shebang';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import disablePackages from 'rollup-plugin-disable-packages';
import closureCompiler from '@ampproject/rollup-plugin-closure-compiler';
import bundleSize from 'rollup-plugin-bundle-size';

/**
 * Plugins to use for rolling up Node deps.
 *
 * Includes a CL pass before CJS / Node resolution *plus* another pass after,
 * just to ensure that we are never crawling dead dependencies. Big concern as
 * the dependency tree gets large (which is common with npm packages).
 */
export const distPlugins = [
  shebang(),
  /**
   * Input is Closure Compiled to minimize strain on `node-resolve`.
   */
  closureCompiler({
    compilation_level: 'SIMPLE',
    language_in: 'ES_NEXT',
    language_out: 'NO_TRANSPILE',
  }),
  commonjs({
    transformMixedEsModules: true,
  }),
  json(),
  disablePackages('fsevents'),
  nodeResolve({
    preferBuiltins: true,
  }),
  bundleSize(),
];

/**
 * Default plugins.
 */
export const defaultPlugins = [
  shebang(),
  bundleSize(),
];
