import { RunRajaPage } from './app.po';

describe('run-raja App', function() {
  let page: RunRajaPage;

  beforeEach(() => {
    page = new RunRajaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rr works!');
  });
});
