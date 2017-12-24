import * as _$ from 'jquery';
import * as chai from 'chai';
const expect = chai.expect;
const chaiJquery = require('chai-jquery');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-dom/test-utils';
import * as TestRenderer from 'react-test-renderer';
import { createRenderer } from 'react-test-renderer/shallow';
import * as jsdom from 'jsdom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { window } from './setup';
import { JQueryExtended } from './types';
import reducers from '../src/reducers';
import { ComponentElement } from 'react';
import { FunctionalComponent } from '../src/types';

chaiJquery(chai, chai['util'], _$);

function renderComponent<T extends React.Component | FunctionalComponent>(
  ComponentClass,
  props = {},
  state = {}
): {
  component: React.Component;
  testInstance: T | FunctionalComponent;
  jqElement: JQueryExtended;
} {
  const el = (
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  const componentInstance = ReactTestUtils.renderIntoDocument(el) as React.Component;

  const testRenderer = TestRenderer.create(el);
  const testInstance = testRenderer.getInstance();
  console.log('testInstance', Object.keys(testInstance));

  return {
    component: componentInstance,
    testInstance: testInstance,
    jqElement: jqComponent(componentInstance),
  };
}

const jqComponent = (component): JQueryExtended => {
  return _$(ReactDOM.findDOMNode(component)) as JQueryExtended;
};

_$.fn['simulate'] = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  ReactTestUtils.Simulate[eventName](this[0]);
};

export { renderComponent, jqComponent, expect };
