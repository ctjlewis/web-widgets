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
  Heading1,
  Heading2,
  HTMLWidget,
  Expanded,
  SubmitButton,
  TextWidget,
  Title,
  Meta,
  DebugScript,
  Button,
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

      background: linear-gradient(to right, #bbdefb var(--scroll), transparent 0);
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
  static styles = `
    height: 100%;
    max-width: 768px;
    margin: 0 auto;
  `;
}

debugLog(
    'Compiled BodyWidget name inside page.js:',
    BodyWidget.name,
);

/**
 * A test button that triggers a state update.
 */
class TestButton extends Button {
  constructor(...args) {
    super(...args);

    this.listeners = [];
  }

  bindListeners() {
    for (const [ e, fn ] of this.listeners)
      this.element.addEventListener(e, fn);

    return this;
  }

  on(e, fn) {
    this.listeners.push([ e, fn ]);
    return this;
  }

  render() {
    super.render();
    return this.bindListeners();
  }
}

/**
 * A number that increments when a button is pressed.
 */
class CounterText extends StatefulWidget {
  /** @param {number} start */
  constructor(start) {
    super();
    this.state.count = start;
  }

  /** @nocollapse */
  build() {
    const heading = new Heading1(this.state.count).setAttributes({ id: 'cntBtn' });
    return new Expanded(
        heading,
        new TestButton('Press Me').on(
            'click',
            () => console.log('state:', this.state.count++),
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
            background: linear-gradient(to top left, #003c8f, #5e92f3); padding: 2rem;
        `),
        new Expanded(
            new Center(
                new PageView(
                    new Heading1(
                        'Thanks for checking it out!',
                    ).setStyles(`
                        font-family: 'Work Sans', sans-serif;
                        font-weight: 800;
                    `),
                    new CounterText(0),
                ),
            ),
        ).setStyles('padding:2rem'),
    ),
);
