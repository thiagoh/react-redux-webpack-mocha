import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component, ComponentClass } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, match } from 'react-router';
import { History, Location } from 'history';

import * as createReactClass from 'create-react-class';

export const requireAuthComponentClass = (ComposedComponent): ComponentClass => {
  const RequireAuth = createReactClass({
    propTypes: {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
    },
    checkAuthentication: function(history: History) {
      console.log('is authenticated', this.props.authenticated);
      console.log('history', history);
      if (!this.props.authenticated) {
        history.push('/');
      }
    },
    componentDidUpdate: function(prevProps: Readonly<{}>, prevState: Readonly<{}>, prevContext: any) {
      const history: History = this.props.history;
      this.checkAuthentication(history);
    },
    componentWillMount: function() {
      const match: match<{}> = this.props.match;
      const location: Location = this.props.location;
      console.log('match,', match);
      console.log('location, ', location);
      const history: History = this.props.history;
      this.checkAuthentication(history);
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
