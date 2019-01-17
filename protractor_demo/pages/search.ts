import { Navigation } from '../widgets/navigation';
import { browser, ExpectedConditions, protractor } from 'protractor';

export class Search {

    private readonly navigationMenu = new Navigation();
    private readonly searchInput = browser.$('[name="q"]');

    async open() {
        await browser.get('http://google.com/ncr');
    }

    async search(text) {
        await browser.wait(ExpectedConditions.visibilityOf(this.searchInput), 5000);
        await this.searchInput.sendKeys(text);
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    async navigateToTranslation() {
        await this.navigationMenu.translate();
    }
}
