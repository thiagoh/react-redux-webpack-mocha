import { renderComponent, jqComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App', () => {
  let component;
  let jqElement;

  beforeEach(() => {
    component = renderComponent(App);
    jqElement = jqComponent(component);
  });

  it('shows a comment box', () => {
    expect(jqElement.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    // expect(jqElement.find('.comment-list')).to.exist;
  });
});
