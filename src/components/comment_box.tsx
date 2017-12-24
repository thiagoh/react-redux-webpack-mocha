import * as React from 'react';
import { Component } from 'react';
import { connect, Connect } from 'react-redux';
import * as actions from '../actions';

export class CommentBox extends Component<{}, { comment: string }> {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  public handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  public handleSubmit(event) {
    event.preventDefault();

    // this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange.bind(this)} />
        <div>
          <button type="submit">Submit Comment</button>
        </div>
      </form>
    );
  }
}

export const ConnectedCommentBox = connect(null, actions)(CommentBox);
