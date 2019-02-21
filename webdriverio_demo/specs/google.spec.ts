import { Results } from '../pages/results';
import { Search } from '../pages/search';

const searchPage = new Search();
const resultsPage = new Results();


describe('google search', () => {
  it('should return 12 results', () => {
    searchPage.open();
    searchPage.search('webdriverio npm');

    resultsPage.shouldHaveNthResults(12);
  });
});
