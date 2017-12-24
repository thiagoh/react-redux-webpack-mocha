import { Component } from 'react';
import { Provider } from 'react-redux';
import { renderComponent, jqComponent, expect } from '../test_helper';
import { CommentList, ConnectedCommentList } from '../../src/components/comment_list';
import * as c from '../../src/components/comment_box';
import { JQueryExtended } from '../types';

describe('CommentList', () => {
  let provider: Component;
  let component: CommentList;
  let jqElement: JQueryExtended;

  beforeEach(() => {
    const props = { comments: ['New Comment', 'Other new comment'] };
    const componentMeta = renderComponent(ConnectedCommentList, null, props);
    provider = componentMeta.component;
    component = componentMeta.testInstance as CommentList;
    jqElement = componentMeta.jqElement;
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
