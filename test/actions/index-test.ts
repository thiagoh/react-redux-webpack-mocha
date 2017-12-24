import { renderComponent, jqComponent, expect } from '../test-helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';
import { Action } from '../../src/types';

describe('Actions', () => {
  describe('saveComment', () => {
    let action: Action;
    beforeEach(() => {
      action = saveComment(undefined);
    });

    it('it has the correct tyoe', () => {
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('it has no payload by default', () => {
      expect(action.payload).to.not.exist;
    });

    it('it has the correct payload', () => {
      action = saveComment('my comment');
      expect(action.payload).to.equal('my comment');
    });
  });
});
