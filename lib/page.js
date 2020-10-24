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
  /** Builtins */
  AsyncStylesheet,
  BodyWidget,
  Center,
  GoogleFont,
  Heading1,
  Heading2,
  HTMLWidget,
  Expanded,
  Title,
  Button,
  StandardHeadWidget,
  PageView,
} from './widgets.js';

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
        new ExtraLargeText(this.state.count),
        new SimpleButton('PRESS ME').on(
            'click',
            this.setState(() => this.state.count++),
        ),
    );
  }
}

/**
 * Only rebuild heading. (Doesn't work post-freeze.)
 */
// class CounterHeading extends StatefulWidget {
//   initState() {
//     this.state.count = 0;
//   }
//   build() {
//     return new ExtraLargeText(this.state.count);
//   }
// }

// const counterHeading = new CounterHeading();

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
                    new Heading1('Welcome to Web Widgets').setStyles(
                        `color: white`,
                        `font-family: 'Work Sans', sans-serif`,
                        `font-weight: 800`,
                    ),
                    new Heading2(
                        'This stateful layout was shipped as 7kB of static, ' +
                        'gzipped data from the edge with Google Cloud CDN.',
                    ).setStyles(
                        `color: white`,
                        `font-family: 'Public Sans', sans-serif`,
                        `font-weight: 400`,
                    ),
                ),
            ),
        ).setStyles(`
            background: linear-gradient(to top left, #003c8f, #bbdefb); padding: 2rem;
        `),
        new Expanded(
            new PageView(
                new Heading1(
                    'Thanks for checking it out!',
                ).setStyles(
                    'color: #003c8f',
                    'text-align: center',
                    `font-family: 'Work Sans', sans-serif`,
                    'font-weight: 800',
                ),
                new CounterView(),
            ),
        ).setStyles('padding:2rem'),
    ),
);
