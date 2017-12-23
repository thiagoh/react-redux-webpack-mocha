import * as React from 'react';
import { Component } from 'react';
import { connect, Connect } from 'react-redux';
import * as actions from '../actions';

export class CommentList extends Component<{}, {}> {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  commentMethod() {
    return 'my first comment';
  }

  render() {
    return (
      <div>
        <button type="submit">Submit Comment</button>
      </div>
    );
  }
}

export const ConnectedCommentList = connect(null, actions)(CommentList);
