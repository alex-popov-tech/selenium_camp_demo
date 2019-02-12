import { Navigation } from '../widgets/navigation';

export class Results {

    async shouldHaveNthResults(quantity) {
        await browser.waitUntil(async () => {
            return quantity === await browser.$$('.g .r').length;
        }, 5000);
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
    }

}
