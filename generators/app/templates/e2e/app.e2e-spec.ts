import { WebpackNg2CliV21Page } from './app.po';

describe('webpack-ng2-cli-v21 App', function() {
  let page: WebpackNg2CliV21Page;

  beforeEach(() => {
    page = new WebpackNg2CliV21Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
