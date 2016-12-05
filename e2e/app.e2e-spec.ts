import { CA2X00116441PatrickSheridanPage } from './app.po';

describe('ca2-x00116441-patrick-sheridan App', function() {
  let page: CA2X00116441PatrickSheridanPage;

  beforeEach(() => {
    page = new CA2X00116441PatrickSheridanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
