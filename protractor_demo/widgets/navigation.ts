import {$, $$, browser, ElementArrayFinder, ElementFinder, ExpectedConditions} from 'protractor';


export class Navigation {
    private readonly button: ElementFinder;
    private readonly menus: ElementArrayFinder;

    constructor() {
        this.button = $('#gbwa');
        this.menus = $$('.gb_T');
    }

    public async translate(): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.button), 3000);
        await this.button.click();
        await browser.wait(ExpectedConditions.visibilityOf(this.menus.first()));
        const count = await this.menus.count();
        let menu: ElementFinder;
        for (let i = 0; i < count; i++) {
            menu = this.menus.get(i);
            if (await menu.getText() === 'Translate') {
                break;
            }
        }
        await browser.wait(ExpectedConditions.elementToBeClickable(menu), 3000);
        await menu.click();
    }
}
