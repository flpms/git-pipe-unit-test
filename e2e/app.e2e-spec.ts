import { GitListPage } from './app.po';

describe('git-list App', function() {
  let page: GitListPage;

  beforeEach(() => {
    page = new GitListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
