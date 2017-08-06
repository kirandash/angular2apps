import { FirebaseGalleryPage } from './app.po';

describe('firebase-gallery App', () => {
  let page: FirebaseGalleryPage;

  beforeEach(() => {
    page = new FirebaseGalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
