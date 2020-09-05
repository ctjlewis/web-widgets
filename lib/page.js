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
  Head,
  Heading1,
  Heading2,
  Link,
  PageBody,
  Title,
  UnstyledWidget,
  WebPage,
  Widget,
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

/**
 * A `NoScript` element.
 */
class NoScript extends UnstyledWidget {
  static get tag() {
    return 'NoScript';
  };
}

/**
 * Load a stylesheet asynchronously, or synchronously if not supported.
 */
class DynamicStylesheet extends Widget {
  /**
   * Create a new async/noscript stylesheet pair.
   *
   * @see https://web.dev/defer-non-critical-css/
   *
   * @param {{
   *  href: string!,
   * }} attributes
   */
  constructor(attributes = { href: '' }) {
    super();
    this.attributes = attributes;
  }

  build() {
    super.build();
    /** Using a fragment to append multiple nodes. */
    this.element = document.createDocumentFragment();

    const asyncLink = new Link({
      rel: 'preload',
      as: 'style',
      onload: `this.onload=null;this.rel='stylesheet'`,
      ...this.attributes,
    });

    const syncLink = new NoScript(
        new Link({
          ...this.attributes,
        }),
    );

    this.element.appendChild(asyncLink.build().element);
    this.element.appendChild(syncLink.build().element);

    return this;
  }
}

export default new WebPage(
    new Head(
        ...HEADER_FLAGS,
        new Title('Test Title'),
        new DynamicStylesheet({
          href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
        }),
        new DynamicStylesheet({
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons&display=block',
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
