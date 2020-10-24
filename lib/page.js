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
  GoogleFont,
  Head,
  Heading1,
  Heading2,
  HTMLWidget,
  Expanded,
  TextWidget,
  Title,
  Meta,
  DebugScript,
  Button,
  FadeIn,
} from './widgets.js';

/**
 * Use the display font.
 */
export class DisplayFont extends TextWidget {
  static get styleString() {
    return `
      font-family: 'Jost', sans-serif;
    `;
  }
}

/**
 * The homepage title.
 */
export class LogoText extends Heading2 {
  static get styleString() {
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
  static styles = [
    'margin: 12px',
    'padding: 0 1em',
  ];
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

  static get styleString() {
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
  static get styleString() {
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
  static get styleString() {
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
  static get styleString() {
    return `
      background: #222;
      color: white;
    `;
  }
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

  static tag = 'svg';
  static styles = [
    'height: 100%',
    'width: 100%',
  ];

  static attributes = {
    viewBox: '0 0 500 150',
    preserveAspectRatio: 'none',
  };
}

/**
 * A <p> element.
 */
export class Paragraph extends MarginText {
  static tag = 'p';
  static styles = [
    `font-family: 'Roboto', sans-serif`,
    `font-size: 18px`,
  ];
}

/** A <label> element. */
export class LabelWidget extends Widget {
  static tag = 'label';
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
    super(
        ...STANDARD_META_TAGS,
        new DebugScript(
            'exports/exe.namespace.js',
            'dist/exe.namespace.js',
        ),
        ...children,
    );
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
  static styles = [
    'background: linear-gradient(to right, #bbdefb var(--scroll), transparent 0)',

    'position: fixed',
    'height: 24px',
    'width: 100%',

    'top: 0',
    'left: 0',

    'will-change: transform',
    'transform: translateZ(0)',

    '-webkit-transform-style: preserve-3d',
    '-webkit-backface-visibility: hidden',
    '-webkit-transform:translate3d(0,0,0)',
    '-webkit-transform-style: preserve-3d',
    '-webkit-perspective: 1000',
    '-webkit-transform: translateZ(0)',
  ];

  render(target = this.element) {
    super.render(target);
    requestAnimationFrame(
        () => {
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
            if (!lock) {
              pct = 100 * window.pageYOffset / (scrollHeight - clientHeight);
              lock = true;
              requestAnimationFrame(() => {
                this.element.style.setProperty('--scroll', `${pct}%`);
                lock = false;
              });
            }
          }, { passive: true });
        },
    );

    return this;
  }
}

/** A page view with max-width 768px. */
export class PageView extends Center {
  static styles = [
    'height: 100%',
    'max-width: 480px',
    'margin: 0 auto',
  ];
}

debugLog(
    'Compiled BodyWidget name inside page.js:',
    BodyWidget.name,
);

/**
 * Huge text.
 */
class ExtraLargeText extends Widget {
  static styles = [
    `font-family: 'Work Sans', sans-serif`,
    'font-size: 4rem',
  ];
}

/**
 * A simple button.
 */
class SimpleButton extends Button {
  static styles = [
    'cursor: pointer',

    'padding: 12px',
    'margin: 48px',

    'width: 100%',
    'min-height: 48px',
    'min-width: 88px',
    'max-width: 240px',

    'text-align: center',
    'text-transform: uppercase',
    'text-decoration:none',

    'border: none',
    'border-radius: 12px',
    'outline: none',

    'background: linear-gradient(-45deg, #003c8f, #1565c0)',
    'color: #fafafa',
    'box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',

    'font-size: 14px',
    'font-size: 1.25rem',
    'font-family: \'Lato\', sans-serif',
  ];
}

/**
 * A header containing a number that increments when a button is pressed.
 */
class CounterView extends StatefulWidget {
  initState() {
    this.state.count = 0;
  }

  build() {
    return new Center(
        new Heading1(
            'Thanks for checking it out!',
        ).setStyles(
            'color: #003c8f',
            'text-align: center',
            `font-family: 'Work Sans', sans-serif`,
            'font-weight: 800',
        ),
        new ExtraLargeText(this.state.count),
        new SimpleButton('PRESS ME').on(
            'click',
            this.setState(() => this.state.count++),
        ),
    );
  }
}

export default new HTMLWidget(
    new StandardHeadWidget(
        new Title('Web Widgets Demo'),
        new GoogleFont('Work Sans', [ 800 ]),
        new GoogleFont('Public Sans', [ 400 ]),
        new AsyncStylesheet({
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons&display=block',
        }),
    ),
    new BodyWidget(
        new ScrollIndicator(),
        new Expanded(
            new Center(
                new PageView(
                    new Heading1('Welcome to Web Widgets').setStyles(`
                        color: white;
                        font-family: 'Work Sans', sans-serif;
                        font-weight: 800;
                    `),
                    new Heading2(
                        'This stateful layout was shipped as 7kB of static, ' +
                        'gzipped data from the edge with Google Cloud CDN.',
                    ).setStyles(`
                        color: white;
                        font-family: 'Public Sans', sans-serif;
                        font-weight: 400;
                    `),
                ),
            ),
        ).setStyles(`
            background: linear-gradient(to top left, #003c8f, #bbdefb); padding: 2rem;
        `),
        new Expanded(
            new PageView(
                new CounterView(),
            ),
        ).setStyles('padding:2rem'),
    ),
);
