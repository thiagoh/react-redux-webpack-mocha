import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component, ComponentClass } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, match } from 'react-router';
import { History, Location } from 'history';

import * as createReactClass from 'create-react-class';

declare type P = {
  authenticated: boolean;
  history: History;
  match: match<{}>;
  location: Location;
};
declare type S = {};
export const requireAuthComponentClass = (ComposedComponent): ComponentClass => {
  const RequireAuth = createReactClass<P, S>({
    propTypes: {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
    },
    checkAuthentication: function(props: Readonly<P>) {
      console.log('is authenticated', props.authenticated);
      console.log('history', props.history);
      if (!props.authenticated) {
        props.history.push('/');
      }
    },
    componentWillUpdate: function(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any) {
      this.checkAuthentication(nextProps);
    },
    componentWillMount: function() {
      const { match, location, history } = this.props;
      console.log('match,', match);
      console.log('location, ', location);
      console.log('history', history);

      this.checkAuthentication(this.props);
    },
    render: function() {
      return <ComposedComponent {...this.props} />;
    },
  });

  const mapStateToProps = (state, ownProps) => {
    return { authenticated: state.authenticated };
  };

  return withRouter(connect(mapStateToProps, null)(RequireAuth));
};

export const requireAuthComponentElement = (ComposedComponent): JSX.Element => {
  // const RequireAuth = requireAuthComponentClass(ComposedComponent);
  // return <RequireAuth />;
  // OR
  return React.createElement(requireAuthComponentClass(ComposedComponent));
};
