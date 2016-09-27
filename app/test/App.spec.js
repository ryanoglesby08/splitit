import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {shallow} from 'enzyme';

import React from 'react';

import App from '../src/App';

describe('App Component', () => {
  chai.use(chaiEnzyme());

  it('displays hello world', () => {
    const app = shallow(<App />);

    expect(app).to.contain.text('Hello World');
  });
});