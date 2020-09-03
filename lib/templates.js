/**
 * @license MIT
 */
/**
 * @fileoverview
 * A file for storing template strings.
 */

import { Meta } from '../exports/widgets.js';

/**
 * To be used in <head>, for viewport sizing.
 */
export const HEADER_FLAGS = [
  new Meta({
    'http-equiv': 'Content-Type',
    'content': 'text/html; charset=UTF-8',
  }),
  new Meta({
    'http-equiv': 'X-UA-Compatible',
    'content': 'IE=edge,chrome=1',
  }),
  new Meta({
    'name': 'viewport',
    'content': 'width=device-width, initial-scale=1.0',
  }),
];

export const TOP_LEVEL_CSS = `
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    font-size: 100%;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
`;
