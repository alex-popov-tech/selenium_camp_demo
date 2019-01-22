import { Navigation } from '../widgets/navigation';
import {$$, browser, by, ElementArrayFinder, ElementFinder, ExpectedConditions} from 'protractor';

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
        const container = this.elements.get(index);
        const result = container.$('a');
        await browser.wait(ExpectedConditions.elementToBeClickable(result), 5000);
        await result.click();
    }

    public async navigateToTranslation(): Promise<void> {
        await this.navigation.translate();
    }
}
