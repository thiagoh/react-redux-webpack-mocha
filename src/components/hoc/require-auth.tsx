import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component, ComponentClass } from 'react';
import { connect } from 'react-redux';
import * as createReactClass from 'create-react-class';

export const requireAuthComponentClass = (ComposedComponent): ComponentClass => {
  const RequireAuth = createReactClass({
    render: () => {
      return <ComposedComponent {...this.props} />;
    },
  });

  return RequireAuth;
};

export const requireAuthComponentElement = (ComposedComponent): JSX.Element => {
  // const RequireAuth = requireAuthComponentClass(ComposedComponent);
  // return <RequireAuth />;
  // OR
  return React.createElement(requireAuthComponentClass(ComposedComponent));
};
