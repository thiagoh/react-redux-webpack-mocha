import * as React from 'react';
import { Component } from 'react';
import { CommentBox } from './comment_box';

export default class App extends Component {
  testMe() {
    return 'my test string';
  }

  render() {
    return (
      <div>
        <CommentBox />
      </div>
    );
  }
}
