import { browser, ExpectedConditions } from 'protractor';


export class Navigation {
    private readonly button = browser.$('#gbwa');
    private readonly menus = this.button.$('.gb_ca').$$('.gb_Z');

    async translate() {
        await browser.wait(ExpectedConditions.visibilityOf(this.button));
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
