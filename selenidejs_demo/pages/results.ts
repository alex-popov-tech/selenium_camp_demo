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
        
        const link = Browser.element('div').all('.link').get(5).element('a')
    }
}
