import { $, browser, ElementFinder, ExpectedConditions, protractor } from 'protractor';

export class Translate {
    private readonly source: ElementFinder;
    private readonly translation: ElementFinder;
    private readonly openSource: ElementFinder;
    private readonly targetSource: ElementFinder;
    private readonly slSearch: ElementFinder;
    private readonly tlSearch: ElementFinder;

    constructor() {
        this.source = $('#source');
        this.translation = $('span.translation');
        this.openSource = $('.tlid-open-source-language-list');
        this.targetSource = $('.tlid-open-target-language-list');
        this.slSearch = $('#sl_list-search-box');
        this.tlSearch = $('#tl_list-search-box');
    }


    public async translate(text: string): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.source), 3000);
        await this.source.sendKeys(text + protractor.Key.ENTER);
    }

    public async shouldHaveTranslation(translation: string): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.translation), 3000);
        await browser.wait(async () => {
            const text = await this.translation.getText();
            return text.includes(translation);
        }, 3000);
    }

    public async chooseLangs(from: string, to: string): Promise<void> {
        await this.chooseFromLang(from);
        await this.chooseToLang(to);
    }

    private async chooseFromLang(lang: string): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.openSource), 3000);
        await this.openSource.click();
        await browser.wait(ExpectedConditions.visibilityOf(this.slSearch), 3000);
        await this.slSearch.sendKeys(lang + protractor.Key.ENTER);
    }

    private async chooseToLang(lang: string) {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.targetSource), 3000);
        await this.targetSource.click();

        await browser.wait(ExpectedConditions.visibilityOf(this.tlSearch), 3000);
        await this.tlSearch.sendKeys(lang + protractor.Key.ENTER);
    }
}
