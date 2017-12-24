import { Component, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { renderComponent, jqComponent, expect } from '../test_helper';
import { JQueryExtended } from '../types';
import { FunctionalComponent } from '../../src/types';
import { CommentStaticList } from '../../src/components/comment_static_list';

describe('CommentStaticList', () => {
  let provider: ReactElement<{}>;
  let component: React.Component;
  let jqElement: JQueryExtended;

  beforeEach(() => {
    const componentMeta = renderComponent(CommentStaticList);
    provider = componentMeta.component as ReactElement<{}>;
    component = componentMeta.instance;
    jqElement = componentMeta.jqElement;
  });

  it('has the correct class', () => {
    // console.log('jqElement', typeof jqElement, Object.keys(jqElement));

    expect(jqElement).to.have.class('comment-static-list');
  });

  it('has a unique li', () => {
    expect(jqElement).to.have.descendants('li');
  });
});
