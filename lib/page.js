/* eslint-disable max-len */
/** @license MIT */
/**
 * @fileoverview
 * For a Web Widgets project, the exe export is where we will build a page out.
 */

import {
  Block,
  Center,
  HEADER_FLAGS,
  Head,
  Heading1,
  Heading2,
  Link,
  Mix,
  PageBody,
  Title,
  TextWidget,
  UnstyledWidget,
  WebPage,
  Widget,
  Elevation1,
  Elevation2,
  Flex,
  Column,
  Inflate,
} from './widgets.js';

const centered = new Center(
    new Heading2('World'),
    new Block().setStyles(`
      width: 100px;
      height: 100px;
      background: red;
    `),
);

/**
 * A `NoScript` element.
 */
export class NoScript extends UnstyledWidget {
  static get tag() {
    return 'NoScript';
  };
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
      weights = [300, 400, 700],
  ) {
    super({
      href: `https://fonts.googleapis.com/css2?family=${font.replace(' ', '+')}:wght@${weights.join(';')}&display=swap`,
    });
  }
}

/**
 * Use the display font.
 */
export class DisplayFont extends TextWidget {
  static get styles() {
    return `
      font-family: 'Jost', sans-serif;
    `;
  }
}

/**
 * The homepage title.
 */
export class LogoText extends Heading2 {
  static get styles() {
    return `
      width: 100%;
      text-align: right;
      margin: 12px;
      padding: 0 24px;
      font-family: 'Playfair Display', serif;
      font-weight: 900;
      font-size: 48px;
    `;
  }
}

/**
 * Spaced out text.
 */
export class MarginText extends Widget {
  static get styles() {
    return `
      margin: 12px;
      padding: 0 1em;
    `;
  }
}

/**
 * Use Raleway font.
 */
export class Raleway extends Widget {
  static get styles() {
    return `
      font-family: 'Raleway', sans-serif;
    `;
  }
}

/**
 * Use Cantana One font.
 */
export class CantataOne extends Widget {
  static get styles() {
    return `
      font-family: 'Cantana One', serif;
    `;
  }
}

/**
 * The homepage headline.
 *
 * @extends Widget
 */
export class Headline extends Widget {
  static get tag() {
    return 'h1';
  }

  static get styles() {
    return `
      display: inline-block;
      padding: 12px;
      margin: 12px;
      font-family: 'Libre Baskerville', sans-serif;
      text-align: right;
      font-weight: 700;
      font-size: 32px;
      background: black;
      color: white;
    `;
  }
}

/**
 * Headline subtitle.
 *
 * @extends Widget
 */
export class Subtitle extends MarginText {
  static get tag() {
    return 'h2';
  }
  static get styles() {
    return `
      font-family: 'Raleway', sans-serif;
      font-weight: 400;
    `;
  }
}

/**
 * A page that resembles a piece of material paper.
 */
export class Material extends Elevation2 {
  static get styles() {
    return `
      border-radius: 24px;
      margin: 12px;
    `;
  }
}

/**
 * A Material sheet with a dark background and white color.
 */
export class DarkMaterial extends Material {
  static get styles() {
    return `
      background: #222;
      color: white;
    `;
  }
}

/**
 * Custom <body> for this demo.
 */
export class MyPage extends WebPage {
}

/**
 * A form for a user to enter their email.
 */
export class FormWidget extends Center {
  static get tag() {
    return 'form';
  }
}

/**
 * The path for the wave.
 *
 * @see https://web.archive.org/web/20180810082435/https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections
 */
export class WavesPath extends Widget {
  static get tag() {
    return 'path';
  }

  static get attributes() {
    return {
      d: 'M-1.09,7.41 C111.15,151.47 350.85,-49.98 500.00,49.98 '
      + 'L500.00,150.00 L-1.09,143.58 Z',
    };
  }
}

/**
 * An SVG for rendering the WavesPath.
 *
 * @see https://web.archive.org/web/20180810082435/https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections
 */
export class WavesSVG extends Widget {
  constructor(...args) {
    super(new WavesPath(...args));
  }

  static get tag() {
    return 'svg';
  }

  static get styles() {
    return `
      height: 100%;
      width: 100%;
    `;
  }

  static get attributes() {
    return {
      viewBox: '0 0 500 150',
      preserveAspectRatio: 'none',
    };
  }
}

/**
 * A <p> element.
 */
export class Paragraph extends MarginText {
  static get tag() {
    return 'p';
  }

  static get styles() {
    return `
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
    `;
  }
}

/**
 * The <body> for this demo.
 */
export class MyBody extends PageBody {
  static get styles() {
    return `
      align-items: center;
      margin: 0 auto;
      max-width: 768px;
      /* Ruled paper */
      background-color: #fff;
      background-image:
      linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px),
      linear-gradient(#eee .1em, transparent .1em);
      background-size: 100% 1.2em;
    `;
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
 * A text input.
 */
export class MyText extends EmailInput {
  static get styles() {
    return `
      border: none;
      border-bottom: 2px solid black;
      height: 48px;
      font-family: 'Raleway', sans-serif;
      font-weight: 700;
      font-size: 24px;
      text-align: center;
    `;
  }
  static get attributes() {
    return {
      ...EmailInput.attributes,
      placeholder: 'email@email.com',
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
 * An <input type="submit"> element.
 */
export class SubmitButton extends InputWidget {
  static get attributes() {
    return {
      type: 'submit',
    };
  }
}

/** My button. */
export class MyButton extends SubmitButton {
  static get attributes() {
    return {
      ...super.attributes,
      value: 'Get Started',
    };
  }
  static get styles() {
    return `
      height: 48px;
      margin: 24px;
      padding: 12px;
      font-family: 'Raleway', sans-serif;
      font-size: 24px;
      font-weight: 700;
      border: none;
      border-radius: 12px;
      -webkit-appearance: none;
      -webkit-border-radius: 12px;
      background: #EEE;
    `;
  }
}

/** A <label> element. */
export class LabelWidget extends Widget {
  static get tag() {
    return 'label';
  }
}

export default new MyPage(
    new Head(
        ...HEADER_FLAGS,
        new Title('Test Title'),
        new GoogleFont('Playfair Display', [900]),
        new GoogleFont('Libre Baskerville', [700]),
        new GoogleFont('Raleway', [700]),
        new AsyncStylesheet({
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons&display=block',
        }),
    ),
    new MyBody(
        new SpaceEvenly(
            new LogoText('Ace Résumés'),
            new Center(
                new Headline('Your dream job starts here.'),
            ),
            // new DarkMaterial(
            //     new Subtitle('Let us portray you in the best light.'),
            // ),
            new FormWidget(
                new MyText().setAttributes({ id: 'email-input' }),
                new MyButton(),
            ),
        ),
        new Inflate(),
    ),
);
