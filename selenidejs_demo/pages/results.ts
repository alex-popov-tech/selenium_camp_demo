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
        
        Browser.all('a')
            .filteredBy(be.visible)
            .filteredBy(have.attribute('foo', 'bar'))

        Browser.element('a').should(be.enabled)
        
        Browser.should(have.url('google.com'))
        
        await this.results
            .get(index)
            .element('a')
            .click();
    }
}
