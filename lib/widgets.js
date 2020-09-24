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
  VIEWPORT_CSS,
  PRODUCTION,
  createElementWithId,
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
  Mix,
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
    return `box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),` +
      `0 2px 1px -1px rgba(0, 0, 0, 0.12),` +
      `0 1px 3px 0 rgba(0, 0, 0, 0.20);`;
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
    return `box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),` +
      `0 3px 1px -2px rgba(0, 0, 0, 0.12),` +
      `0 1px 5px 0 rgba(0, 0, 0, 0.20);`;
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
export class TextWidget extends Widget {}

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

  static get styles() {
    // return `font-size: 48px;`;
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

  static get styles() {
    // return `font-size: 24px`;
  }
}

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
export class Center extends Flex {
  static get styles() {
    return `
            align-items: center;
            justify-content: center;
            text-align: center;
        `;
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
 * @category Widgets
 * @extends Flex
 */
export class Inflate extends Flex {
  static get styles() {
    return `
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 0;

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
export class Column extends Inflate {
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
export class Row extends Inflate {
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
 * De-anonymize a Closure Compiler name-mangled object method.
 *
 * @param {Object!} obj
 * The object whose enumerable properties will be searched.
 *
 * @param {Function} methodRef
 * The reference to a function which may or may not be a method on the object.
 *
 * @return {string?}
 * The property name of the matched method, undefined if no match.
 */
export function deanonymize(obj, methodRef) {
  /**
   * Return methodReference ES6 `.name` if exists.
   */
  if (methodRef.name) return methodRef.name;
  /**
   * Else, search the object for a reference match.
   */
  else for (const key in obj) if (obj[key] === methodRef) return key;
}

window['deanonymize'] = deanonymize;

/**
 * A Widget with state.
 *
 * @extends Widget
 */
export class StatefulWidget extends Widget {
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
    requestAnimationFrame(() => {
      const sourceClass = this.constructor;
      const expression = (
        `${sourceClass.name}` +
        `.${
          deanonymize(sourceClass, sourceClass.from)
        }(document.currentScript.parentNode)` +
        `.${
          deanonymize(sourceClass.prototype, sourceClass.prototype.initState)
        }();`
      );

      const script = document.createElement('script');
      script.setAttribute('defer', true);
      script.appendChild(document.createTextNode(expression));

      this.element.appendChild(script);
    });

    requestAnimationFrame(() => this.initState());
    return this;
  }

  /**
   * Initialize this Widget's state, and descend down the tree.
   *
   * @nocollapse
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
            transition: opacity 0.5s ease-in-out;
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

/**
 * Generates a new `document` and fills the screen. Overrides the default
 * `render()` method in order to export stylesheet.
 *
 * @category Widgets
 */
export class HTMLWidget extends Widget {
  constructor(...children) {
    super(...children);

    /**
     * @type {HTMLBodyElement!}
     */
    this.element;
  }

  static get tag() {
    return 'html';
  }

  static get styles() {
    return VIEWPORT_CSS;
  }

  exportStylesheet() {
    /** Create a new ww-stylesheet. */
    const frozenStyles = createElementWithId('style', 'ww-stylesheet');

    /**
     * Read the rules from the in-memory STYLESHEET and encode as text in the
     * new <style> DOM element.
     */
    for (const hotRules of STYLESHEET.sheet.cssRules) {
      frozenStyles.textContent += hotRules.cssText;
    }

    /**
     * Replace the dynamically generated stylesheet in the new document (stored
     * at `this.element`) with the frozen styles. This prevents two stylesheets
     * with ID `ww-stylesheet` from existing in the new `document.head`.
     */
    this.element.querySelector('head').appendChild(frozenStyles);

    return this;
  }

  /**
   * Build this WebPage, and export the frozen styles to <head>.
   *
   * @return {HTMLWidget} this
   */
  build() {
    super.build();
    return this.exportStylesheet();
  }

  /**
   * Render this Widget.
   *
   * @return {HTMLWidget} this
   */
  render() {
    /** Replace the entire document with the built node. */
    document.documentElement.replaceWith(this.maybeBuild().element || 'ERROR');
    return this;
  }
}

/**
 * A <body> element that fades in onload.
 */
export class BodyWidget extends FadeIn {
  static get tag() {
    return 'body';
  }

  static get styles() {
    return VIEWPORT_CSS;
  }

  /**
   * Build a Webpage.
   *
   * @return {BodyWidget} this
   */
  build() {
    super.build();

    /**
     * Add `initState` script to body.
     */
    const script = document.createElement('script');
    script.type = 'module';

    /**
     * Don't use <script type="module"> in production, since
     * dist/exe.initState.js won't be an ES module.
     */
    script.src = (
      PRODUCTION
        ? 'dist/exe.initState.js'
        : 'exports/exe.initState.js'
    );

    /**
     * Execute `initState` and return.
     */
    // this.element.append(script);
    return this;
  }
}

/**
 * Load a stylesheet asynchronously, or synchronously if not supported.
 */
export class AsyncStylesheet extends Widget {
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

/**
 * Create a Google Fonts stylesheet.
 */
export class GoogleFont extends AsyncStylesheet {
  /**
   * @param {string} font
   * @param {Array<string|number>} weights
   */
  constructor(
      font = 'Lato',
      weights = [ 300, 400, 700 ],
  ) {
    super({
      href: `https://fonts.googleapis.com/css2?family=${font.replace(' ', '+')}:wght@${weights.join(';')}&display=swap`,
    });
  }
}


/**
 * An <input> element.
 */
export class InputWidget extends Widget {
  static get tag() {
    return 'input';
  }
}

/**
 * A text input.
 */
export class EmailInput extends InputWidget {
  static get attributes() {
    return {
      type: 'email',
    };
  };
}

/**
 * An <input type="submit"> element.
 */
export class SubmitButton extends InputWidget {
  static get attributes() {
    return {
      type: 'submit',
    };
  }
}

/**
 * An Inflate Widget with `justify-content: space-evenly`.
 */
export class SpaceEvenly extends Inflate {
  static get styles() {
    return `
      justify-content: space-evenly;
    `;
  }
}

/**
 * A `NoScript` element.
 */
export class NoScript extends UnstyledWidget {
  static get tag() {
    return 'NoScript';
  };
}
