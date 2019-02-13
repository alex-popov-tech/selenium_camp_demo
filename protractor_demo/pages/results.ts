import { Navigation } from '../widgets/navigation';
import {$$, browser, by, ElementArrayFinder, ElementFinder, ExpectedConditions} from 'protractor';

export class Results {
    private readonly navigation = new Navigation();
    private readonly elements = $$('.g .r');

    public async followNthResultLink(index: number): Promise<void> {
        const result = this.elements.get(index).$('a');
        
        await browser.wait(ExpectedConditions.elementToBeClickable(result), 5000);
        await result.click();
    }

    public async shouldHaveNthResults(quantity: number): Promise<void> {
        await browser.wait(async () => {
            let result;
            return quantity === await this.elements.count();
        }, 5000);
    }

    public async navigateToTranslation(): Promise<void> {
        await this.navigation.translate();
    }
}
