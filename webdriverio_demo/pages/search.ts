import { Navigation } from '../widgets/navigation';

export class Search {

    async open() {
        await browser.url('http://google.com/ncr');
    }

    async search(text) {
        await browser.$('[name="q"]').waitForDisplayed();
        await browser.$('[name="q"]').setValue(text);
        await browser.keys("\uE007");
    }

}
