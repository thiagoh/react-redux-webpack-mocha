import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './home';
import { CommentBox } from './comment-box';
import { CommentList } from './comment-list';
import { Header } from './header';
import { getWithRef } from '../utils/connect-options';

export class AppImpl extends React.Component<{}, {}> {
  testMe() {
    return 'my test string';
  }

  render() {
    return (
      <div>
        <Header />
        {/* {this.props.children} */}
      </div>
    );
  }
}

export const App = connect(null, null, null, getWithRef(true))(AppImpl);
