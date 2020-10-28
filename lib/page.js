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
  ScrollIndicator,
} from './widgets.js';

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
 * A layout containing a number that increments when a button is pressed.
 */
export class CounterView extends StatefulWidget {
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
