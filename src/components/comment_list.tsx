import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { FunctionalComponent } from '../types';

export class CommentList extends React.Component<{ comments?: string[] }, {}> {
  renderComments() {
    if (!this.props.comments) {
      return;
    }
    return this.props.comments.map(comment => <li key={comment}>{comment}</li>);
  }

  render() {
    return <ul className="comment-list">{this.renderComments()}</ul>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  return { comments: state.comments };
};

export const ConnectedCommentList = connect(mapStateToProps, actions)(CommentList);
