import { Navigation } from '../widgets/navigation';
import { $, browser, ElementFinder, ExpectedConditions, protractor } from 'protractor';

export class Search {
    private readonly navigation: Navigation;
    private readonly input: ElementFinder;

    constructor() {
        this.navigation = new Navigation();
        this.input = $('[name="q"]');
    }

    public async open(): Promise<void> {
        await browser.get('http://google.com/ncr');
    }

    public async search(text: string): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.input), 5000);
        await this.input.sendKeys(text);
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    public async navigateToTranslation(): Promise<void> {
        await this.navigation.translate();
    }
}
