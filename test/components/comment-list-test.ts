import { Component } from 'react';
import { Provider } from 'react-redux';
import { renderComponent, jqComponent, expect } from '../test-helper';
import { CommentList, ConnectedCommentList } from '../../src/components/comment-list';
import { JQueryExtended } from '../types';

describe('CommentList', () => {
  let provider: Component;
  let component: CommentList;
  let jqElement: JQueryExtended;

  beforeEach(() => {
    const props = { comments: ['New Comment', 'Other new comment'] };
    const componentMeta = renderComponent(ConnectedCommentList, null, props);
    provider = componentMeta.component as Component;
    component = componentMeta.instance as CommentList;
    jqElement = componentMeta.jqElement;
  });

  it('has the correct class', () => {
    expect(component.renderComments).to.exist;
  });

  it('has the correct class', () => {
    expect(jqElement).to.have.class('comment-list');
  });

  it('should have 2 li elements', () => {
    expect(jqElement.find('li')).to.have.lengthOf(2);
  });

  it('should each comment that is provided', () => {
    expect(jqElement).to.contain('New Comment');
    expect(jqElement).to.contain('Other new comment');
  });
});
