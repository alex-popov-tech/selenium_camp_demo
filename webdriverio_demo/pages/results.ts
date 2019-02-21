export class Results {

    shouldHaveNthResults(quantity) {
      browser.waitUntil(async () => {
            const elements =  browser.$$('.g .r');
            const filtered = [];
            for (let index = 0; index < elements.length; index++) {
              const elem = elements[index];
                if ( elem.isDisplayed()) {
                    // @ts-ignore
                    filtered.push(elem);
                }
            }
            return quantity === filtered.length + 1;
        }, 5000);
    }

    followNthResultLink(index) {
         browser.waitUntil(async () => {
            const elements =  browser.$$('.g .r');
            const filtered = [];
            for (let index = 0; index < elements.length; index++) {
              const elem = elements[index];
                if ( elem.isDisplayed()) {
                    // @ts-ignore
                    filtered.push(elem);
                }
            }
            return quantity === filtered.length + 1;
        }, 5000;
        browser.$$('.g .r')[index].$('a').click();
    }

}
