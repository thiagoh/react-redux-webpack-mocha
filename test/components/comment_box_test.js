import { renderComponent, jqComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;
  let jqElement;

  beforeEach(() => {
    component = renderComponent(CommentBox);
    jqElement = jqComponent(component);
  });

  it('has the correct class', () => {
    expect(jqElement).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(jqElement.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(jqElement.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      jqElement.find('textarea').simulate('change', 'new comment');
    });

    it('shows that text in the textarea', () => {
      expect(jqElement.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the input', () => {
      jqElement.simulate('submit');
      expect(jqElement.find('textarea')).to.have.value('');
    });
  });
});
