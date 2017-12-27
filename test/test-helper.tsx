import * as React from 'react';
import { ComponentElement, ReactElement } from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-dom/test-utils';
import * as createReactClass from 'create-react-class';
import * as TestRenderer from 'react-test-renderer';
import { createRenderer } from 'react-test-renderer/shallow';
import { Provider, connect, Connect, ComponentClass } from 'react-redux';
import { createStore } from 'redux';
import { window, $ } from './setup';
import * as chai from 'chai';
const expect = chai.expect;
const chaiJquery = require('chai-jquery');
import { JQueryExtended } from './types';
import reducers from '../src/reducers';
import * as _$ from 'jquery';
declare type jq = typeof _$;

chaiJquery(chai, chai['util'], $);

interface TestComponentMetadata<T> {
  component: React.Component | ReactElement<any>;
  instance: T;
  jqElement: JQueryExtended;
}

const isFunctionalComponent = (ComponentClassName): boolean => {
  return Object.keys(ComponentClassName.prototype).length <= 0;
};

const isReduxComponent = (ComponentClassName): boolean => {
  return typeof ComponentClassName.WrappedComponent !== 'undefined';
};

const getStatefulComponentClass = (ComponentClassName, props = {}, state = {}): ComponentClass<{}> => {
  let Clazz;
  if (isFunctionalComponent(ComponentClassName)) {
    // in order to use `ReactTestUtils.renderIntoDocument` we need a ComponentClass
    Clazz = createReactClass({
      render: () => {
        return <ComponentClassName {...props} />;
      },
    });

    return Clazz;
  } else if (isReduxComponent(ComponentClassName)) {
    // class components but needs to be wrapped by a react-redux Provider
    Clazz = createReactClass({
      render: () => {
        return (
          <Provider store={createStore(reducers, state)}>
            <ComponentClassName ref="selector" {...props} />
          </Provider>
        );
      },
    });
  } else {
    // it's already a ComponentClass
    Clazz = ComponentClassName;
  }

  return Clazz;
};

const renderComponent = <T extends React.Component>(ComponentClassName, props = {}, state = {}): TestComponentMetadata<T> => {
  let componentInstance: React.Component | ReactElement<any>;
  let instance: T;
  let jqElement: JQueryExtended;
  const StatefulComponentClass = getStatefulComponentClass(ComponentClassName, props, state);

  if (isReduxComponent(ComponentClassName)) {
    componentInstance = ReactTestUtils.renderIntoDocument(<StatefulComponentClass />) as React.Component;
    instance = (componentInstance as React.Component).refs['selector']['wrappedInstance'] as T;
  } else {
    componentInstance = ReactTestUtils.renderIntoDocument(<StatefulComponentClass {...props} />) as React.Component;
    componentInstance.setState(state);
    instance = componentInstance as T;
  }

  return Object.freeze({
    component: componentInstance,
    jqElement: jqComponent(componentInstance),
    instance: instance,
  });
};

const jqComponent = (component): JQueryExtended => {
  return $(ReactDOM.findDOMNode(component)) as JQueryExtended;
};

$.fn['simulate'] = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  // https://reactjs.org/docs/test-utils.html#simulate
  ReactTestUtils.Simulate[eventName](this[0]);
};

export { TestComponentMetadata, renderComponent, jqComponent, expect };
