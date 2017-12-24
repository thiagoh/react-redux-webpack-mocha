import { Component } from 'react';
import { renderComponent, jqComponent, expect } from '../test-helper';
import { App, AppImpl } from '../../src/components/app';
import { JQueryExtended } from '../types';

// Use 'describe' to group together similar tests
describe('App', () => {
  let provider: Component;
  let component: AppImpl;
  let jqElement: JQueryExtended;

  beforeEach(() => {
    const componentMeta = renderComponent(App, null, {});
    provider = componentMeta.component as Component;
    component = componentMeta.instance as AppImpl;
    jqElement = componentMeta.jqElement;
  });

  it('shows a comment box', () => {
    expect(jqElement.find('.comment-box')).to.exist;
  });

  it('should show the correct test string', () => {
    expect(component.testMe).to.exist;
    expect(component.testMe()).to.equal('my test string');
  });

  it('shows a comment list', () => {
    expect(jqElement.find('.comment-list')).to.exist;
  });
});
