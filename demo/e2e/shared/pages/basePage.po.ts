import { $, $$, browser, ElementArrayFinder, ElementFinder } from 'protractor';
import { expect } from 'chai';

export class BasePagePo {
  headerLogo: ElementFinder = $('.logo');
  headerIconBtns: ElementArrayFinder = $$('.header-list>li');
  searchInput: ElementFinder = $('[name*="search"]');
  bsVersionBtns: ElementArrayFinder = $$('.bootstrap-version .btn');
  leftSideNavigationBtns: ElementArrayFinder = $$('.sidebar-list>li');

  assertCurrentUrlEqual(template: string) {
    return expect(browser.getCurrentUrl()).to.eventually.equal(template);
  }

  assertCurrentUrlEnds(text: string) {
    return browser.getCurrentUrl().then(url => expect(url.endsWith(text)).to.equal(true));
  }

  assertElementDisplayed(elementFinder: ElementFinder) {
    return expect(elementFinder.isDisplayed()).to.eventually.equal(true);
  }
}
