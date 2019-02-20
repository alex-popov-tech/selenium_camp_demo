
export class Results {

    async shouldHaveNthResults(quantity) {
    const {Browser, be, have} = require('selenidejs');
    await Browser.all('.g .r').filterBy(be.visible).should(have.size(quantity));
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
