import * as React from 'react';
import { Component } from 'react';
import { connect, Connect } from 'react-redux';
import { saveComment } from '../actions';
import { bindActionCreators } from 'redux';

declare type P = { saveComment?: typeof saveComment };
declare type S = { comment: string };

export class CommentBoxImpl extends Component<P, S> {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  public handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  public handleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ saveComment }, dispatch);
};

export const CommentBox = connect(null, mapDispatchToProps)(CommentBoxImpl);
// export const ConnectedCommentBox = connect(null, { saveComment })(CommentBoxImpl);
