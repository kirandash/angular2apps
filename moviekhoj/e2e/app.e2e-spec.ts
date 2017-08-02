import { MoviekhojPage } from './app.po';

describe('moviekhoj App', function() {
  let page: MoviekhojPage;

  beforeEach(() => {
    page = new MoviekhojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
