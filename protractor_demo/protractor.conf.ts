export const config = {
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'jasmine2',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 20000,
        stopSpecOnExpectationFailure: true
    },
    specs: ['./specs/*-spec.js'],
    seleniumAddress: "http://localhost:4444/wd/hub",
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {args: ['--no-sandbox']}
    }
};
