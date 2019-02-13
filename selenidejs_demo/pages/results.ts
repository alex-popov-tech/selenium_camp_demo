import { be, Browser, have } from 'selenidejs';
import { Navigation } from '../widgets/navigation';

export class Results {

    async shouldHaveNthResults(quantity) {
        await Browser.all('.g .r').should(have.size(quantity));
    }

    async followNthResultLink(index) {
        await Browser.all('.g .r').filterBy(be.visible)
            .get(index)
            .element('a')
            .click();
    }
}
