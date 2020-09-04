/** @license MIT */
/**
 * @fileoverview
 * For a Web Widgets project, the exe export is where we will build a page out.
 */

import {
  PRODUCTION,
} from './globals.js';

import {
  Block,
  Center,
  HEADER_FLAGS,
  PageBody,
  WebPage,
  Head,
  Heading1,
  Heading2,
  Title,
  Link,
} from './widgets.js';

const centered = new Center(
    new Heading2('World'),
    new Block().setStyles(`
      width: 100px;
      height: 100px;
      background: red;
    `),
);

const body = new PageBody(
    new Heading1('Hello'),
    centered,
);

export default new WebPage(
    new Head(
        ...HEADER_FLAGS,
        new Title('Test Title'),
        new Link({
          href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
          defer: true,
        }),
        new Link({
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons&display=block',
          defer: true,
        }),
    ),
    body,
);

import * as globals from './globals.js';
import * as widgets from './widgets.js';

if (!PRODUCTION) {
  Object.assign(window, globals);
  Object.assign(window, widgets);
  window.pageBody = body;
  window.centered = centered;
}
