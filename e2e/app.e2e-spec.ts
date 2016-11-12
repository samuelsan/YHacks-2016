import { Yhacks2016Page } from './app.po';

describe('yhacks2016 App', function() {
  let page: Yhacks2016Page;

  beforeEach(() => {
    page = new Yhacks2016Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
