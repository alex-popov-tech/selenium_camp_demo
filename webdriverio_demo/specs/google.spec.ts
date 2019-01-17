import { Results } from '../pages/results';
import { Search } from '../pages/search';
// import { Translate } from '../pages/translate';
import './base';

const searchPage = new Search();
const resultsPage = new Results();
// const translatePage = new Translate();


describe('google', () => {
    describe('search', () => {
        it('should return 10 results', async () => {
            await searchPage.open();
            await searchPage.search('webdriverio npm');

            await resultsPage.shouldHaveNthResults(10);
        });

        // it('should follows first result link', async () => {
        //     await searchPage.open();
        //     await searchPage.search('selenide js npm');
        //     await resultsPage.followNthResultLink(0);
        //
        //     // await Browser.should(have.url('https://www.npmjs.com/package/selenidejs'));
        // });
    });

    // describe('translation', () => {
    //     it('should return correct translation', async () => {
    //         await searchPage.open();
    //         await searchPage.navigateToTranslation();
    //         await translatePage.chooseLangs('English', 'Russian');
    //         await translatePage.translate('selenide js is awesome');
    //
    //         await translatePage.shouldHaveTranslation('Селенид JS является удивительным');
    //     });
    // });
});
