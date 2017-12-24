import * as React from 'react';
import { Component } from 'react';
import { CommentBox } from './comment-box';
import { CommentList } from './comment-list';
import { connect } from 'react-redux';
import { getWithRef } from '../utils/connect-options';

export class AppImpl extends React.Component<{}, {}> {
  testMe() {
    return 'my test string';
  }

  render() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

export const App = connect(null, null, null, getWithRef(true))(AppImpl);
