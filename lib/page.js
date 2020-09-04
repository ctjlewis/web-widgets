/** @license MIT */
/**
 * @fileoverview
 * For a Web Widgets project, the exe export is where we will build a page out.
 */

import {
  CenteredElement,
  HEADER_FLAGS,
  PageBody,
  WebPage,
  Head,
  Heading1,
  Heading2,
  Title,
  Link,
} from './widgets.js';

import { addStylesheet } from './core.js';

/** Initialize CSSOM stylesheet. */
addStylesheet();

const body = new PageBody(
    new Heading1('Hello'),
    new CenteredElement(
        new Heading2('World'),
    ),
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
