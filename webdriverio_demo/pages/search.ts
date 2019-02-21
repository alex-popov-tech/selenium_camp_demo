export class Search {

    open() {
      browser.url('http://google.com/ncr');
    }

    search(text) {
        browser.$('[name="q"]').waitForDisplayed();
        browser.$('[name="q"]').setValue(text);
        browser.keys("\uE007");
    }

}
