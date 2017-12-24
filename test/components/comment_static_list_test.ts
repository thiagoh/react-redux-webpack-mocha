import { Component } from 'react';
import { Provider } from 'react-redux';
import { renderComponent, jqComponent, expect } from '../test_helper';
import { JQueryExtended } from '../types';
import { FunctionalComponent } from '../../src/types';
import { CommentStaticList } from '../../src/components/comment_static_list';

describe('CommentStaticList', () => {
  let provider: Component;
  let component: FunctionalComponent;
  let jqElement: JQueryExtended;

  beforeEach(() => {
    const componentMeta = renderComponent(CommentStaticList);
    provider = componentMeta.component;
    component = componentMeta.testInstance as FunctionalComponent;
    jqElement = componentMeta.jqElement;
  });

  it('has the correct class', () => {
    expect(jqElement).to.have.class('comment-static-list');
  });

  it('has a unique li', () => {
    expect(jqElement).to.have.descendants('li');
  });
});
