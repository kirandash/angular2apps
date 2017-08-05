import { browser, element, by } from 'protractor';

export class RunRajaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rr-root h1')).getText();
  }
}
