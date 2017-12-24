import { Component } from 'react';
import { Provider } from 'react-redux';
import { renderComponent, jqComponent, expect } from '../test-helper';
import { CommentBox, ConnectedCommentBox } from '../../src/components/comment-box';
import * as c from '../../src/components/comment-box';
import { JQueryExtended } from '../types';

describe('CommentBox', () => {
  let provider: Component;
  let component: CommentBox;
  let jqElement: JQueryExtended;

  beforeEach(() => {
    const componentMeta = renderComponent(CommentBox);
    provider = componentMeta.component as Component;
    component = componentMeta.instance as CommentBox;
    jqElement = componentMeta.jqElement;
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
