import { be, Browser, have } from 'selenidejs';
import { Navigation } from '../widgets/navigation';

export class Results {
    
    private readonly results = Browser.all('.g .r').filterBy(be.visible);

    async shouldHaveNthResults(quantity) {
        await this.results.should(have.size(quantity));
    }

    async followNthResultLink(index) {
        await this.results
            .get(index)
            .element('a')
            .click();
    }
}
