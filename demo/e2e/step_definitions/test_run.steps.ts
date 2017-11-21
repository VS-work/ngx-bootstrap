import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';
import { LandingPo } from '../pages/landing.po';
import { safeClick } from '../shared/helpers/wd-helper';
import { GettingStartedPo } from '../pages/gettingStarted.po';
import { BasePagePo } from '../shared/pages/basePage.po';

defineSupportCode(({Given, When, Then}) => {
  const basePage: BasePagePo = new BasePagePo();
  const landingPage: LandingPo = new LandingPo();
  const gettingStartedPage: GettingStartedPo = new GettingStartedPo();

  Given(/^I am on the landing page$/, () => {
   return browser.get(landingPage.pageUrl);
  });

  When(/^I click on Get Started Button$/, () => {
    return safeClick(landingPage.getStartedBtn);
  });

  Then(/^I am redirected to Getting Started page$/, () => {
    return basePage.assertCurrentUrlEnds(gettingStartedPage.pageUrl);
  });

  Then(/^I see Angular icon$/, () => {
    return basePage.assertElementDisplayed(gettingStartedPage.angularLogo);
  });

  Given(/^I am on the getting started page$/, () => {
    return browser.get(gettingStartedPage.pageUrl);
  });
});
