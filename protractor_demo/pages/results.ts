import { Navigation } from '../widgets/navigation';
import { $$, browser, by, ElementArrayFinder, ElementFinder } from 'protractor';

export class Results {
    private readonly navigation: Navigation;
    private readonly elements: ElementArrayFinder;

    constructor() {
        this.navigation = new Navigation();
        this.elements = $$('.g .r');
    }

    public async shouldHaveNthResults(quantity: number): Promise<void> {
        await browser.wait(async () => {
            let result;
            const count = await this.elements.count();
            return count === quantity;
        }, 5000);
    }

    public async followNthResultLink(index: number): Promise<void> {
        await browser.wait(async () => {
            const container: ElementFinder = await this.elements.get(index);
            const result = container.$('a');
            return await result.isDisplayed();
        }, 3000);

        const container: ElementFinder = await this.elements.get(index);
        const result = container.$('a');
        await result.click();
    }

    public async navigateToTranslation(): Promise<void> {
        await this.navigation.translate();
    }
}
