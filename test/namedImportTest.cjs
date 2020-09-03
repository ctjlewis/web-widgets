/** @license MIT */

require('chai/register-expect');
require('enable-browser-mode');

const {
  Widget,
  Center,
} = require('../dist/widgets.cjs');

describe('Named CJS imports', () => {
  it('Should work for various widgets', () => {
    expect(Widget).to.be.a('function');
    expect(Center).to.be.a('function');
  });
});
