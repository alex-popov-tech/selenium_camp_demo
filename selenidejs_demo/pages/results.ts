import { be, Browser, have } from 'selenidejs';
import { Navigation } from '../widgets/navigation';

export class Results {

    private readonly navigationMenu = new Navigation();

    async shouldHaveNthResults(quantity) {
        await Browser.all('.g .r').should(have.size(quantity));
    }

    async followNthResultLink(index) {
        await Browser.all('.g .r').filterBy(be.visible)
            .get(index)
            .element('a')
            .click();
    }

    async navigateToTranslation() {
        await this.navigationMenu.translate();
    }
}
