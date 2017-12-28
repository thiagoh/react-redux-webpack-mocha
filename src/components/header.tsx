import * as React from 'react';
import { Component } from 'react';
import { connect, Connect } from 'react-redux';
import { saveComment } from '../actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
declare type P = {};
declare type S = {};

export class HeaderImpl extends Component<P, S> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  authButton() {
    return <button>Sign In</button>;
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export const Header = connect(null, mapDispatchToProps)(HeaderImpl);
