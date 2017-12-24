import { renderComponent, jqComponent, expect } from '../test_helper';
import App from '../../src/components/app';
import { Component } from 'react';
import { JQueryExtended } from '../types';

// Use 'describe' to group together similar tests
describe('App', () => {
  let provider: Component;
  let component: App;
  let jqElement: JQueryExtended;

  beforeEach(() => {
    const componentMeta = renderComponent(App);
    provider = componentMeta.component as Component;
    component = componentMeta.instance as App;
    jqElement = componentMeta.jqElement;
  });

  it('shows a comment box', () => {
    expect(jqElement.find('.comment-box')).to.exist;
  });

  it('should show the correct test string', () => {
    expect(component.testMe()).to.equal('my test string');
  });

  it('shows a comment list', () => {
    expect(jqElement.find('.comment-list')).to.exist;
  });
});
