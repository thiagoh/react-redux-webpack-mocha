import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CommentBox } from './comment-box';
import { CommentList } from './comment-list';
import { Home } from './home';
import { Header } from './header';
import { getWithRef } from '../utils/connect-options';

export class AppImpl extends React.Component<{}, {}> {
  testMe() {
    return 'my test string';
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={CommentBox} />
          <Route exact path="/resources" component={CommentList} />
        </div>
      </Router>
    );
  }
}

export const App = connect(null, null, null, getWithRef(true))(AppImpl);
