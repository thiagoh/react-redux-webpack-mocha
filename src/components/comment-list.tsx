import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { getWithRef } from '../utils/connect-options';
import { saveComment } from '../actions';
import { FunctionalComponent } from '../types';
import { bindActionCreators } from 'redux';

export class CommentListImpl extends React.Component<{ comments?: string[] }, {}> {
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
  return { comments: state.comments };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ saveComment }, dispatch);
};

export const CommentList = connect(mapStateToProps, mapDispatchToProps, null, getWithRef(true))(CommentListImpl);
