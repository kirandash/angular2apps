import { ClassifiedsPage } from './app.po';

describe('classifieds App', () => {
  let page: ClassifiedsPage;

  beforeEach(() => {
    page = new ClassifiedsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to cf!');
  });
});
