import { 
    Browser,
    With,
    be,
    have
} from 'selenidejs';

import { Navigation } from '../widgets/navigation';

export class Results {
    
    private readonly results = Browser.all('.g .r').filterBy(be.visible);

    async shouldHaveNResults(n) {
        await this.results.should(have.size(n));
    }

    async followNthResultLink(index) {
        await this.results
            .get(index)
            .element('a')
            .click();
        
        const results = Browser.all('.g .r').filteredBy(be.visible)
        const firstVisibleResult = Browser.all('.g .r').findBy(be.visible)
    }
}
