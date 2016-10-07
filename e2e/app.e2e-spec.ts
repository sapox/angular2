import { NuevaAppPage } from './app.po';

describe('nueva-app App', function() {
  let page: NuevaAppPage;

  beforeEach(() => {
    page = new NuevaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
