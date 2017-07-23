import { NpmTestPage } from './app.po';

describe('npm-test App', () => {
  let page: NpmTestPage;

  beforeEach(() => {
    page = new NpmTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
