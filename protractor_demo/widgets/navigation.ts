import {$, $$, browser, ElementArrayFinder, ElementFinder, ExpectedConditions} from 'protractor';


export class Navigation {
    private readonly button: ElementFinder;
    private readonly menus: ElementArrayFinder;

    constructor() {
        this.button = $('.gb_xc');
        this.menus = $$('.gb_T');
    }

    public async translate(): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.button), 3000);
        await this.button.click();
        await browser.wait(async () => {
            const webelements = await this.menus.getWebElements();
            for (const webelement of webelements) {
                if ((await webelement.isDisplayed()) && ('Translate' === await webelement.getText())) {
                    return true;
                }
            }
            return false;
        });

        const webelements = await this.menus.getWebElements();
        for (const webelement of webelements) {
            if ((await webelement.isDisplayed()) && ('Translate' === await webelement.getText())) {
                await webelement.click();
            }
        }
    }
}
