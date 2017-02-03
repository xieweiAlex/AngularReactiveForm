import { FormDemoPage } from './app.po';

describe('form-demo App', function() {
  let page: FormDemoPage;

  beforeEach(() => {
    page = new FormDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
