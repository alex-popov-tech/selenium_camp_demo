import { Browser, have } from 'selenidejs';


export class Navigation {
    private readonly button = Browser.element('#gbwa');
    private readonly menus = this.button.element('.gb_ca').all('.gb_Z');

    async translate() {
        await this.button.click();
        await this.menus.filterBy(have.exactText('Translate')).first().click();
    }
}
