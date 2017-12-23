import * as _$ from 'jquery';
import * as chai from 'chai';
const expect = chai.expect;
const chaiJquery = require('chai-jquery');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';
import * as jsdom from 'jsdom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { window } from './setup';
import { JQueryExtended } from './types';
import reducers from '../src/reducers';

chaiJquery(chai, chai['util'], _$);

const renderComponent = (ComponentClass, props = {}, state = {}) => {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  return ReactDOM.findDOMNode(componentInstance);
};

const jqComponent = (component): JQueryExtended => {
  return _$(component) as JQueryExtended;
};

_$.fn['simulate'] = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export { renderComponent, jqComponent, expect };
