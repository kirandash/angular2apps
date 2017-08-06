import { browser, element, by } from 'protractor';

export class PicmePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pm-root h1')).getText();
  }
}
