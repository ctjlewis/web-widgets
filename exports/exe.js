/** @license MIT */
/**
 * @fileoverview
 * For a Web Widgets project, the exe export is where we will build a page out.
 */

import {
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

import { addStylesheet } from '../lib/core.js';

/** Initialize CSSOM stylesheet. */
addStylesheet();

const body = new PageBody(
    new Heading1('Hello'),
    new Center(
        new Heading2('World'),
    ),
);

const page = new WebPage(
    new Head(
        ...HEADER_FLAGS,
        new Title('Test Title'),
        new Link('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'),
        new Link('https://fonts.googleapis.com/icon?family=Material+Icons&display=block'),
    ),
    body,
);

page.render();
console.log(page.html);
