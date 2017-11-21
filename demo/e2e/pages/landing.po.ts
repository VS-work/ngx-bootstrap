import { $, ElementFinder } from 'protractor';


export class LandingPo {
  pageUrl = '#/';
  // pageUrl = 'https://valor-software.com/ngx-bootstrap';
  getStartedBtn: ElementFinder = $('.btn-primary');
  githubBtn: ElementFinder = $('.btn-outline-secondary');
}
