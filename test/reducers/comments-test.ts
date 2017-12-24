import { expect } from '../test-helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';
import { Action } from '../../src/types';
import commentsReducer from '../../src/reducers/comments';

describe('CommentsReducer', () => {
  it('handles action with unknown type', () => {
    expect(commentsReducer(undefined, { type: '' })).to.be.instanceof(Array);
    expect(commentsReducer(undefined, { type: '' })).to.be.eql([]);
  });

  it('handles action of type SAVE_COMMENT with initial state', () => {
    const action: Action = { type: SAVE_COMMENT, payload: 'new comment' };
    expect(commentsReducer(undefined, action)).to.be.instanceof(Array);
    expect(commentsReducer(undefined, action)).to.be.eql(['new comment']);
  });

  it('handles action of type SAVE_COMMENT with some state', () => {
    const action: Action = { type: SAVE_COMMENT, payload: 'new comment' };
    const someState = ['old comment'];
    expect(commentsReducer(someState, action)).to.be.eql(['old comment', 'new comment']);
  });
});
