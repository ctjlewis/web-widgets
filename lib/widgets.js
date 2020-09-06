/**
 * @license MIT
 */
/**
 * @fileoverview
 * Built-in Widgets.
 */

/**
 * GLOBALS
 */
import {
  STYLESHEET,
  TOP_LEVEL_CSS,
  PRODUCTION,
} from './globals.js';

/**
 * CORE UTILS
 */
import {
  Mix,
  Widget,
  WidgetLike,
} from './core.js';

/**
 * Expose classes from core.
 */
export {
  Inheritable,
  Widget,
} from '../lib/core.js';

/**
 * A Widget with elevation `1`.
 *
 * @category Widgets
 * @extends Widget
 */
export class Elevation1 extends Widget {
  static get styles() {
    return `box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),`
      + `0 2px 1px -1px rgba(0, 0, 0, 0.12),`
      + `0 1px 3px 0 rgba(0, 0, 0, 0.20);`;
  }
}

/**
 * A Widget with elevation `2`.
 *
 * @category Widgets
 * @extends Widget
 */
export class Elevation2 extends Widget {
  static get styles() {
    return `box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),`
      + `0 3px 1px -2px rgba(0, 0, 0, 0.12),`
      + `0 1px 5px 0 rgba(0, 0, 0, 0.20);`;
  }
}

/**
 * A Widget that sets `display: block`.
 *
 * @category Widgets
 * @extends Widget
 */
export class Block extends Widget {
  static get styles() {
    return `
            display: block;
        `;
  }
}

/**
 * Adds 16px of padding. Override `style` to customize.
 *
 * @category Widgets
 * @extends Widget
 */
export class Padding extends Widget {
  static get styles() {
    return `
            padding: 16px;
        `;
  }
}

/**
 * @category Widgets
 * @extends Widget
 */
export class Center extends Widget {
  static get styles() {
    return `
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        `;
  }
}

/**
 * A relative positioned element.
 *
 * @category Widgets
 * @extends Widget
 */
export class Relative extends Widget {
  static get styles() {
    return `
            position: relative;
         `;
  }
}

/**
 * An absolutely positioned element.
 *
 * @category Widgets
 * @extends Widget
 */
export class Absolute extends Widget {
  static get styles() {
    return `position: absolute;`;
  }
}

/**
 * A fixed position element.
 *
 * @category Widgets
 * @extends Widget
 */
export class Fixed extends Widget {
  static get styles() {
    return `position: fixed;`;
  }
}

/**
 * A full-width element.
 *
 * @category Widgets
 * @extends Widget
 */
export class FullWidth extends Widget {
  static get styles() {
    return `width: 100%;`;
  }
}

/**
 * A full-height element.
 *
 * @category Widgets
 * @extends Widget
 */
export class FullHeight extends Widget {
  static get styles() {
    return `height: 100%;`;
  }
}

// END POSITIONAL WIDGETS

/**
 * By descending text-like Widgets from `TextWidget`, we can set default text
 * properties like `color` and `font-family`.
 *
 * @category Widgets
 * @extends Widget
 */
export class TextWidget extends Widget {
  static get styles() {
    return `
            font-family: Lato, Arial, Helvetica, sans-serif;
            color: black;
        `;
  }
}

/**
 * A boring `h1` element.
 *
 * @category Widgets
 * @extends TextWidget
 */
export class Heading1 extends TextWidget {
  static get tag() {
    return 'h1';
  }
}

/**
 * A boring `h2` element.
 *
 * @category Widgets
 * @extends TextWidget
 */
export class Heading2 extends TextWidget {
  static get tag() {
    return 'h2';
  }
}

/**
 * A boring `h1` element, but centered inside its container.
 *
 * @category Widgets
 * @extends Widget
 */
export class CenteredHeading1 extends Mix(Heading1, Center) {}

/**
 * A boring `h2` element, but centered inside its container.
 *
 * @category Widgets
 * @extends Widget
 */
export class CenteredHeading2 extends Mix(Heading2, Center) {}

/**
 * Flex Widgets display with `display: flex` and expose the `setFlex` method.
 *
 * @category Widgets
 * @extends Widget
 */
export class Flex extends Widget {
  static get styles() {
    return `
            display: flex;
            flex-shrink: 0;
            flex-basis: 0;
            flex-grow: 1;
            flex-direction: column;
            align-items: center;
        `;
  }

  /**
   * Set this Widget's flex value.
   *
   * @param {number!} flex Flex value for this widget.
   *
   * @return {Widget} this
   */
  setFlex(flex = 1) {
    return this.setStyles(`flex-grow: ${flex};`);
  }
}

/**
 * @category Widgets
 * @extends Flex
 */
export class Inflate extends Flex {
  static get styles() {
    return `
            width: 100%;
            height: 100%;

            max-height: 100%;
            max-height: -moz-available;
            max-height: -webkit-fill-available;
            max-height: fill-available;

            margin: 0px;
            padding: 0px;
        `;
  }
}

/**
 * @category Widgets
 * @extends Flex
 */
export class Column extends Flex {
  static get styles() {
    return `
            flex-direction: column !important;
        `;
  }
}

/**
 * @category Widgets
 * @extends Flex
 */
export class Row extends Flex {
  static get styles() {
    return `
            flex-direction: row !important;
        `;
  }
}

/**
 * @category Widgets
 * @extends Inflate
 */
export class Slide extends Inflate {}

/**
 * @category Widgets
 * @extends Flex
 */
export class Card extends Flex {
  static get styles() {
    return `
            background: rgba(255, 255, 255, 0.1);
            border: 4px solid white;
            margin: 10px;
        `;
  }
}

/**
 * @category Widgets
 * @extends Flex
 */
export class CenteredCard extends Mix(Center, Card, FullWidth) {}

/**
 * Renders dark text, i.e. `color: black`.
 *
 * @category Widgets
 */
export class DarkText extends TextWidget {
  static get styles() {
    return `
            color: black;
        `;
  }
}

/**
 * Renders bold text.
 *
 * @category Widgets
 */
export class BoldText extends TextWidget {
  static get styles() {
    return `
            font-weight: bold;
        `;
  }
}

/**
 * A boring old `<img>` tag.
 *
 * @category Widgets
 */
export class Img extends Widget {
  static get tag() {
    return 'img';
  }

  /**
   * The URL for this img's src attribute.
   *
   * @param {string} src
   */
  constructor(src) {
    super();
    this.setAttributes({
      src: src,
    });
  }
}

/**
 * A Widget for displaying flexible images.
 *
 * @category Widgets
 */
export class FlexImg extends Inflate {
  /**
   * The URL for this image.
   *
   * @param {string} src
   */
  constructor(src) {
    super();
    this.setStyles(`
            background-image: url(${src});
        `);
  }
}

/**
 * A horizontal layout is a full-width flex row.
 *
 * @category Widgets
 * @extends Widget
 */
export class Horizontal extends Mix(FullWidth, Row) {
  static get styles() {
    return `justify-content: space-around;`;
  }
}

/**
 * A vertical layout is a full-height flex column.
 *
 * @category Widgets
 * @extends Widget
 */
export class Vertical extends Mix(FullHeight, Column) {
  static get styles() {
    return `justify-content: space-around;`;
  }
}

/**
 * A bottom bar with height of 80px.
 */
export class BottomBar extends Widget {
  static get styles() {
    return `
            height: 80px;
        `;
  }
}

/**
 * Renders a DarkText at 50% opacity.
 *
 * @category Widgets
 */
export class GreyText extends DarkText {
  static get styles() {
    return 'opacity: 0.5;';
  }
}

/**
 * A Widget with state.
 *
 * @extends Widget
 */
export class StatefulWidget extends Widget {
  /**
   * Implement `from` to prevent compiler type errors.
   *
   * @param {HTMLElement} el
   * @return {StatefulWidget}
   */
  // static from(el) {
  //   return super.from(el);
  // }

  /**
   * Build the widget and schedule the initState callback.
   *
   * @return {StatefulWidget}
   */
  build() {
    super.build();
    /**
     * Schedule updates and return.
     */
    requestAnimationFrame(() => this.initState());
    return this;
  }

  /**
   * Initialize the state.
   *
   * @return {void}
   */
  initState() {}
}

/**
 * An element that fades in.
 */
export class FadeIn extends StatefulWidget {
  static get styles() {
    return `
            opacity: 0;
            transition: opacity 0.2s ease-in;
        `;
  }

  /**
   * @todo
   * Set up states as async.
   */
  initState() {
    super.initState();
    this.element.style.opacity = 1;
  }
}

/**
 * Generate a Material icon.
 *
 * @category Widgets
 */
export class MaterialIcon extends Widget {
  /**
   * The name of the material icon, i.e. `add`.
   *
   * @param {string} icon
   */
  constructor(icon) {
    super(icon);
    this.setClasses('material-icons');
  }

  static get styles() {
    return `
            font-size: 36px;
            user-select: none;
        `;
  }

  static get tag() {
    return 'i';
  }
}

/**
 * A list.
 *
 * @category Widgets
 * @extends Widget
 */
export class List extends FullWidth {
  static get styles() {
    return `
            display: table;
            overflow: scroll;
        `;
  }
}

/**
 * The content of a ListItem.
 */
export class ListItemContent extends Vertical {
  static get styles() {
    return `
            align-items: start !important;
            justify-content: center;
        `;
  }
}

/**
 * An item in a List.
 *
 * @category Widgets
 * @extends Row
 */
export class ListItem extends Mix(Row, Elevation1) {
  /**
   * @param {{left: WidgetLike, title: WidgetLike, subtitle: WidgetLike, right:
   *  WidgetLike}} options Options for the ListItem.
   */
  constructor({ left, title, subtitle, right }) {
    super(
        left,
        new ListItemContent(
            new BoldText(title),
            new GreyText(subtitle),
        ),
        right,
    );
  }

  static get styles() {
    return `
            margin: 4px 0;
            width: 100%;
            height: 80px;
            padding: 24px;
        `;
  }
}

/**
 * WebPage widgets for <head>, <body> etc.
 */

/**
 * An element with no styling.
 */
export class UnstyledWidget extends Widget {
  build() {
    this.classNames = [];
    super.build();
    return this;
  }
}

/**
 * A <head> element.
 */
export class Head extends UnstyledWidget {
  static get tag() {
    return 'head';
  }
}

/**
 * A <title> element.
 */
export class Title extends UnstyledWidget {
  static get tag() {
    return 'title';
  }
}

/**
 * A <link> element.
 */
export class Link extends UnstyledWidget {
  constructor(attributes = {}) {
    super();
    this.setAttributes(attributes);
  }

  static get tag() {
    return 'link';
  }

  static get attributes() {
    return {
      rel: 'stylesheet',
    };
  }
}

/**
 * A <meta> element.
 */
export class Meta extends UnstyledWidget {
  constructor(attrs) {
    super().setAttributes(attrs);
  }

  static get tag() {
    return `meta`;
  }
}

// import { debugLog } from './core.js';
// /**
//  * Append the Widgets stylesheet to the document head.
//  *
//  * @return {void}
//  */
// const addStylesheet = () => {
//   debugLog('Adding Stylesheet...');
//   document.head.appendChild(
//       STYLESHEET,
//   );
// };

/**
 * Generates a new `document` and fills the screen. Overrides the default
 * `render()` method in order to export stylesheet.
 *
 * @category Widgets
 * @extends UnstyledWidget
 */
export class WebPage extends UnstyledWidget {
  constructor(...children) {
    super(...children);

    /**
     * @type {HTMLBodyElement!}
     */
    this.element;
    this.attributes.id = 'root';
  }

  static get tag() {
    return 'html';
  }

  static get styles() {
    return TOP_LEVEL_CSS;
  }

  initState() {
    console.log('initState for WebPage called!', 'got id:', this.attributes.id);
  }

  exportStylesheet() {
    const styles = document.createElement('style');
    const sheet = STYLESHEET.sheet;

    if (!sheet) {
      return this;
    }
    else {
      for (const rule of sheet.cssRules) {
        styles.textContent += rule.cssText;
      }
    }

    this.element.firstChild.appendChild(styles);
    return this;
  }

  /**
   * Build this WebPage, and make sure the StyleSheet is ready.
   *
   * @return {WebPage} this
   */
  build() {
    super.build();
    return this.exportStylesheet();
  }

  /**
   * Render this Widget.
   *
   * @return {WebPage} this
   */
  render() {
    if (!this.element) this.build();

    document.documentElement.replaceWith(this.element);
    return this;
  }
}

/**
 * A <body> element that fades in onload.
 */
export class PageBody extends FadeIn {
  static get tag() {
    return 'body';
  }

  static get styles() {
    return TOP_LEVEL_CSS;
  }

  /**
   * Build a Webpage.
   *
   * @return {PageBody} this
   */
  build() {
    super.build();

    /**
     * Add `initState` script to body.
     */
    const script = document.createElement('script');
    script.type = 'module';
    script.src = PRODUCTION
        ? 'dist/exe.initState.js'
        : 'exports/exe.initState.js';

    /**
     * Execute `initState` and return.
     */
    this.element.append(script);
    return this;
  }
}

/**
 * UTILITIES
 */

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
