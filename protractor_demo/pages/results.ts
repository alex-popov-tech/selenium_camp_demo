import { Navigation } from '../widgets/navigation';
import {$$, browser, by, ElementArrayFinder, ElementFinder, ExpectedConditions} from 'protractor';

export class Results {
    private readonly results = $$('.g .r');

    public async followNthResultLink(index: number): Promise<void> {
        const resultLink = this.results.get(index).$('a');
        
        await browser.wait(ExpectedConditions.elementToBeClickable(result), 5000);
        await result.click();
    }

    public async shouldHaveNthResults(quantity: number): Promise<void> {
        await browser.wait(async () => {
            let result;
            return quantity === await this.elements.count();
        }, 5000);
    }
}
