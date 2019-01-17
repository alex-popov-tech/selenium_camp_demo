// import { Browser, perform } from 'selenidejs';
import { Navigation } from '../widgets/navigation';

export class Search {

    // private readonly navigationMenu = new Navigation();

    async open() {
        await browser.url('http://google.com/ncr');
        // await Browser.open('http://google.com/ncr');
    }

    async search(text) {
        await browser.$('[name="q"]').waitForDisplayed();
        await browser.$('[name="q"]').setValue(text);
        await browser.keys("\uE007");
    }

    // async navigateToTranslation() {
    //     await this.navigationMenu.translate();
    // }
}
