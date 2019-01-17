import { Browser, have, perform } from 'selenidejs';


export class Translate {

    async translate(text: string) {
        await Browser.element('#source').setValue(text).then(perform.pressEnter);
    }

    async shouldHaveTranslation(translation: string) {
        await Browser.element('span.translation').should(have.text(translation));
    }

    async chooseLangs(from: string, to: string) {
        await this.chooseFromLang(from);
        await this.chooseToLang(to);
    }

    private async chooseFromLang(lang: string) {
        await Browser.element('.tlid-open-source-language-list').click();
        await Browser.element('#sl_list-search-box').setValue(lang).then(perform.pressEnter);
    }

    private async chooseToLang(lang: string) {
        await Browser.element('.tlid-open-target-language-list').click();
        await Browser.element('#tl_list-search-box').setValue(lang).then(perform.pressEnter);
    }
}
