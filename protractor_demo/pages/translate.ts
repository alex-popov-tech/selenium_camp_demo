import { browser, ExpectedConditions, protractor } from 'protractor';

export class Translate {

    async translate(text: string) {
        await browser.$('#source').sendKeys(text + protractor.Key.ENTER);
    }

    async shouldHaveTranslation(translation: string) {
        await browser.wait(async function () {
            browser.$('span.translation').getText().then(text => text.includes(translation));
        }, 3000);
    }

    async chooseLangs(from: string, to: string) {
        await this.chooseFromLang(from);
        await this.chooseToLang(to);
    }

    private async chooseFromLang(lang: string) {
        const button = browser.$('.tlid-open-source-language-list');
        await browser.wait(ExpectedConditions.visibilityOf(button), 3000);
        await button.click();

        const searchBox = browser.$('.tlid-open-source-language-list');
        await browser.wait(ExpectedConditions.visibilityOf(searchBox), 3000);
        await browser.$('#sl_list-search-box').sendKeys(lang + protractor.Key.ENTER);
    }

    private async chooseToLang(lang: string) {
        const button = browser.$('.tlid-target-source-language-list');
        await browser.wait(ExpectedConditions.visibilityOf(button), 3000);
        await button.click();

        const searchBox = browser.$('#tl_list-search-box');
        await browser.wait(ExpectedConditions.visibilityOf(searchBox), 3000);
        await browser.$('#tl_list-search-box').sendKeys(lang + protractor.Key.ENTER);
    }
}
