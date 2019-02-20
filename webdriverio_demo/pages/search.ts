
export class Search {

    async open() {
        await browser.url('http://google.com/ncr');
    }

    async search(text) {
        const { WebDriver } = require('selenium-webdriver');
        const _http = require('selenium-webdriver/http');

        const sessionId = browser['sessionId'];
        const {hostname, port, path} = browser['config'];
        console.log(hostname + ':' + port + path)

        const client = new _http.HttpClient('http://' + hostname + ':' + port + path)
        const executor = new _http.Executor(client);
        const webdriver = new WebDriver(sessionId, executor);

        const { Browser, perform } = require('selenidejs');
        Browser.configuration.webdriver = webdriver;

        await Browser.element('[name="q"]').setValue(text).then(perform.pressEnter)
        //await browser.$('[name="q"]').waitForDisplayed();
        //await browser.$('[name="q"]').setValue(text);
        //await browser.keys("\uE007");
    }

}
