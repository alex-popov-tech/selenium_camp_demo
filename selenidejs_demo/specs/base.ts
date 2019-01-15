import { Browser } from 'selenidejs';
import { Builder } from 'selenium-webdriver';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;


beforeEach(() => {
    Browser.configuration.webdriver = new Builder()
        .withCapabilities({browserName: 'chrome'})
        .build();
    Browser.configuration.timeout = 6000;
    Browser.configuration.screenshotPath = '';
    Browser.configuration.htmlPath = '';
});

afterEach(async () => {
   await Browser.quit();
});



