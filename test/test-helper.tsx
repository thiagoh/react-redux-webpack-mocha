import * as _$ from 'jquery';
import * as chai from 'chai';
const expect = chai.expect;
const chaiJquery = require('chai-jquery');
import * as React from 'react';
import { ComponentElement, ReactElement } from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-dom/test-utils';
import * as createReactClass from 'create-react-class';
import * as TestRenderer from 'react-test-renderer';
import { createRenderer } from 'react-test-renderer/shallow';
import * as jsdom from 'jsdom';
import { Provider, connect, Connect } from 'react-redux';
import { createStore } from 'redux';

import { window } from './setup';
import { JQueryExtended } from './types';
import reducers from '../src/reducers';

chaiJquery(chai, chai['util'], _$);

function renderComponent<T extends React.Component>(
  ComponentClass,
  props = {},
  state = {}
): {
  component: React.Component | ReactElement<any>;
  instance: T;
  jqElement: JQueryExtended;
} {
  // console.log(ComponentClass.WrappedComponent);
  let componentInstance: React.Component | ReactElement<any>;
  let instance: T;
  let jqElement: JQueryExtended;

  const functional = Object.keys(ComponentClass.prototype).length <= 0;
  const reduxComponent = typeof ComponentClass.WrappedComponent !== 'undefined';
  if (functional) {
    // in order to use `ReactTestUtils.renderIntoDocument` we need a class component
    const Clazz = createReactClass({
      render: () => {
        return <ComponentClass {...props} />;
      },
    });

    componentInstance = ReactTestUtils.renderIntoDocument(<Clazz />) as React.Component;
    instance = componentInstance as T;
  } else if (reduxComponent) {
    // class components
    const Clazz = createReactClass({
      render: () => {
        return (
          <Provider store={createStore(reducers, state)}>
            <ComponentClass ref="selector" {...props} />
          </Provider>
        );
      },
    });

    componentInstance = ReactTestUtils.renderIntoDocument(<Clazz />) as React.Component;
    instance = (componentInstance as React.Component).refs['selector']['wrappedInstance'] as T;
  } else {
    componentInstance = ReactTestUtils.renderIntoDocument(<ComponentClass {...props} />) as React.Component;
    componentInstance.setState(state);
    instance = componentInstance as T;
  }

  // console.log('aaaaaaaa', typeof (componentInstance.refs['selector']['wrappedInstance'] || {}).renderComments);

  return {
    component: componentInstance,
    jqElement: jqComponent(componentInstance),
    instance: instance,
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
