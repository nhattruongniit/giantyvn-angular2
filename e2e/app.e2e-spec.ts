import { GiantyvnAngular2Page } from './app.po';

describe('giantyvn-angular2 App', () => {
  let page: GiantyvnAngular2Page;

  beforeEach(() => {
    page = new GiantyvnAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
