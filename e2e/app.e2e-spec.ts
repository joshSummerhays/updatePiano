import { UpdatePianoPage } from './app.po';

describe('update-piano App', () => {
  let page: UpdatePianoPage;

  beforeEach(() => {
    page = new UpdatePianoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
