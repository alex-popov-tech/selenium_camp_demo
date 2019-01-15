import { Browser, perform } from 'selenidejs';
import { Navigation } from '../widgets/navigation';

export class Search {

    private readonly navigationMenu = new Navigation();

    async open() {
        await Browser.open('http://google.com/ncr');
    }

    async search(text) {
        await Browser.element('[name="q"]').setValue(text)
            .then(perform.pressEnter);
    }

    async navigateToTranslation() {
        await this.navigationMenu.translate();
    }
}
