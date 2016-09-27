/* global document */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

require('../stylesheet/application.scss');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

