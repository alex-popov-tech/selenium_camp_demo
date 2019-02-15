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
        
        const results = $$('.rc');
        browser.url('http://google.com/ncr');
        console.log(results.length); // prints 0
        
        
        await this.results
            .get(index)
            .element('a')
            .click();
    }
}
