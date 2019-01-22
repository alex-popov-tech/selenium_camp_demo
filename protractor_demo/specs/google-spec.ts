import { browser } from 'protractor';
import { Results } from '../pages/results';
import { Search } from '../pages/search';
import { Translate } from '../pages/translate';

const searchPage = new Search();
const resultsPage = new Results();
const translatePage = new Translate();

describe('google search', () => {
    // it('should return 17 results', async () => {
    //     await searchPage.open();
    //     await searchPage.search('protractor npm');
    //
    //     await resultsPage.shouldHaveNthResults(17);
    // });
    //
    // it('should follows first result link', async function () {
    //     await searchPage.open();
    //     await searchPage.search('protractor npm');
    //     await resultsPage.followNthResultLink(0);
    //
    //     await browser.wait(async function () {
    //         return browser.getCurrentUrl().then(url => url === 'https://www.npmjs.com/package/protractor');
    //     }, 5000);
    // });

    describe('google translation', () => {
        it('should return correct translation', async () => {
            await searchPage.open();
            await searchPage.navigateToTranslation();
            await translatePage.chooseLangs('English', 'Russian');
            await translatePage.translate('selenide js is awesome');

            await translatePage.shouldHaveTranslation('Селенид JS является удивительным');
        });
    });
});
