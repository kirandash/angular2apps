import { PicmePage } from './app.po';

describe('picme App', function() {
  let page: PicmePage;

  beforeEach(() => {
    page = new PicmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pm works!');
  });
});
