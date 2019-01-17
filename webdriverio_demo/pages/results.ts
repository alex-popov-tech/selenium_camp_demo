// import { be, Browser, have } from 'selenidejs';
import { Navigation } from '../widgets/navigation';

export class Results {

    // private readonly navigationMenu = new Navigation();

    async shouldHaveNthResults(quantity) {
        await browser.waitUntil(async () => {
            return quantity === await browser.$$('.g .r').length;
        }, 5000);
        // await Browser.all('.g .r').should(have.size(quantity));
    }

    async followNthResultLink(index) {
        await browser.waitUntil(async () => {
            const elements = await browser.$$('.g .r');
            const filtered = [];
            for (const elem of elements) {
                if (await elem.isDisplayed()) {
                    // @ts-ignore
                    filtered.push(elem);
                }
            }
            return index === filtered.length + 1;
        }, 5000);
        await browser.$$('.g .r')[index].$('a').click();
        // await Browser.all('.g .r').filterBy(be.visible)
        //     .get(index)
        //     .element('a')
        //     .click();
    }

    // async navigateToTranslation() {
    //     await this.navigationMenu.translate();
    // }
}
