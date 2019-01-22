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
        await browser.actions().mouseMove(this.button).perform();
        const menu = await this.findMenu('Translate');
        await browser.wait(ExpectedConditions.elementToBeClickable(menu), 3000);
        await menu.click();
    }

    private async findMenu(name: string): Promise<ElementFinder> {
        await browser.wait(ExpectedConditions.visibilityOf(this.menus.first()));
        const count = await this.menus.count();
        for (let i = 0; i < count; i++) {
            const menu = await this.menus.get(i);
            if (await menu.getText() === name) {
                return menu;
            }
        }
    }
}
