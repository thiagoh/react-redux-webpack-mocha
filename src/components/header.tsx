import * as React from 'react';
import { Component } from 'react';
import { connect, Connect } from 'react-redux';
import { authenticate } from '../actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

declare type P = { authenticated?: boolean; authenticate: typeof authenticate };
declare type S = {};

export class HeaderImpl extends Component<P, S> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  authButton() {
    if (this.props.authenticated) {
      return <button onClick={() => this.props.authenticate(false)}>Sign Out</button>;
    }
    return <button onClick={() => this.props.authenticate(true)}>Sign In</button>;
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/new">Add New</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">{this.authButton()}</li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { authenticated: state.authenticated };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ authenticate }, dispatch);
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderImpl);
