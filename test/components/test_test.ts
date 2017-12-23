import { renderComponent, jqComponent, expect } from '../test_helper';

// Use 'describe' to group together similar tests
describe('Test', () => {
  let component;
  let jqElement;

  beforeEach(() => {
  });

  it('knows how to sum', () => {
    expect(1+2).to.equal(3);
  });
});
