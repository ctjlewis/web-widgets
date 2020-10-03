/* eslint-disable max-len */
/** @license MIT */
/**
 * @fileoverview
 * For a Web Widgets project, the exe export is where we will build a page out.
 */

import { debugLog } from './globals.js';

import {
  /** Core */
  Widget,
  StatefulWidget,
  /** Builtins. */
  AsyncStylesheet,
  Block,
  BodyWidget,
  Center,
  Elevation2,
  EmailInput,
  GoogleFont,
  Head,
  Heading2,
  HTMLWidget,
  Expanded,
  SubmitButton,
  TextWidget,
  Title,
  Meta,
} from './widgets.js';

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
export class MyPage extends HTMLWidget {
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
      d: 'M-1.09,7.41 C111.15,151.47 350.85,-49.98 500.00,49.98 ' +
      'L500.00,150.00 L-1.09,143.58 Z',
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
export class MyBody extends BodyWidget {
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

const STANDARD_META_TAGS = [
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

/** A standard <head> that contains some normal viewport-related <meta> tags. */
export class StandardHeadWidget extends Head {
  constructor(...children) {
    super(...STANDARD_META_TAGS, ...children);
  }
}

/**
 * A bar displaying scroll progress.
 *
 * @see https://www.afasterweb.com/2017/09/26/performance-basics-throttling/
 *
 * @see https://www.digitalocean.com/community/tutorials/js-progress-bar-javascript-css-variables
 *
 * @see https://www.youtube.com/watch?v=2an6-WVPuJU
 */
export class ScrollIndicator extends StatefulWidget {
  static get styles() {
    return `
      position: fixed;
      height: 24px;
      width: 100%;
      
      top: 0;
      left: 0;

      will-change: transform;
      transform: translateZ(0);
      -webkit-transform-style: preserve-3d;
      -webkit-backface-visibility: hidden;
      -webkit-transform:translate3d(0,0,0);
      -webkit-transform-style: preserve-3d;
      -webkit-perspective: 1000;
      -webkit-transform: translateZ(0);

      background: linear-gradient(to right, #003C8F var(--scroll), transparent 0);
    `;
  }

  initState() {
    const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight,
    );
    const clientHeight = Math.max(
        document.body.clientHeight,
        document.documentElement.clientHeight,
    );

    let lock = false;
    let pct = 0;

    document.addEventListener('scroll', () => {
      pct = 100 * window.pageYOffset / (scrollHeight - clientHeight);

      if (!lock) {
        lock = true;
        requestAnimationFrame(() => {
          this.element.style.setProperty('--scroll', `${pct}%`);
          lock = false;
        });
      }
    }, { passive: true });
  }
}

/** A page view with max-width 768px. */
export class PageView extends Block {
  static get styles() {
    return `
      height: 100%;
      max-width: 768px;
      margin: 0 auto;
    `;
  }
}

debugLog(
    'Compiled BodyWidget name inside page.js:',
    BodyWidget.name,
);

export default new HTMLWidget(
    new StandardHeadWidget(
        new Title('Test Title'),
        new GoogleFont('Playfair Display', [ 900 ]),
        new GoogleFont('Libre Baskerville', [ 700 ]),
        new GoogleFont('Raleway', [ 700 ]),
        new AsyncStylesheet({
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons&display=block',
        }),
    ),
    new BodyWidget(
        new ScrollIndicator(),
        new PageView(
            new Expanded().setStyles('background: #555'),
            new Expanded(),
        ),
    ),
);

// export default new MyPage(
//     new Head(
//         ...HEADER_FLAGS,
//         new Title('Test Title'),
//         new GoogleFont('Playfair Display', [ 900 ]),
//         new GoogleFont('Libre Baskerville', [ 700 ]),
//         new GoogleFont('Raleway', [ 700 ]),
//         new AsyncStylesheet({
//           href: 'https://fonts.googleapis.com/icon?family=Material+Icons&display=block',
//         }),
//     ),
//     new MyBody(
//         new SpaceEvenly(
//             new LogoText('Ace Résumés'),
//             new Center(
//                 new Headline('Your dream job starts here.'),
//             ),
//             // new DarkMaterial(
//             //     new Subtitle('Let us portray you in the best light.'),
//             // ),
//             new FormWidget(
//                 new MyText().setAttributes({ id: 'email-input' }),
//                 new MyButton(),
//             ),
//         ),
//         new Inflate(),
//     ),
// );
