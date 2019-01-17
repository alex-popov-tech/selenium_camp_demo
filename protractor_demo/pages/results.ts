import { Navigation } from '../widgets/navigation';
import { browser, by } from 'protractor';

export class Results {

    private readonly navigationMenu = new Navigation();

    async shouldHaveNthResults(quantity) {
        await browser.wait(function () {
            return browser.$$('.g .r').getWebElements().then(webelements => webelements.length === quantity, err => false);
        }, 5000);
    }

    async followNthResultLink(index) {
        await browser.wait(async function () {
            const webelements = await browser.$$('.g .r').getWebElements();
            const resultContainer = await webelements[index].findElement(by.css('a'));
            return resultContainer.isDisplayed();
        }, 3000);
        const webelements = await browser.$$('.g .r').getWebElements();
        await webelements[0].findElement(by.css('a')).then(webelement => webelement.click());
    }

    async navigateToTranslation() {
        await this.navigationMenu.translate();
    }
}
