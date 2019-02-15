import { 
    Browser,
    With,
    be,
    have
} from 'selenidejs';

import { Navigation } from '../widgets/navigation';

export class Results {
    
    private readonly results = Browser.all('.g .r').filterBy(be.visible);

    async shouldHaveNthResults(quantity) {
        await this.results.should(have.size(quantity));
    }

    async followNthResultLink(index) {
        
        Browser.all('a').filteredBy(be.visible.and(have.attribute('foo', 'bar'))
        
        await this.results
            .get(index)
            .element('a')
            .click();
    }
}
