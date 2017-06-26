import { Ng4CookingManagerPage } from './app.po';

describe('ng4-cooking-manager App', () => {
  let page: Ng4CookingManagerPage;

  beforeEach(() => {
    page = new Ng4CookingManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
