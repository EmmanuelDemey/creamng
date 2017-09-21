import { browser, element, by } from 'protractor';

describe('QuickStart Lib E2E Tests', function () {

  beforeEach(() => browser.get(''));

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

 
  it('should display ( 1-4 ) / 15 ', () => {
    expect(element(by.css('.total-pages')).getText()).toEqual('( 1-4 ) / 15');
  });
 

});
