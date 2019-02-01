Example of end to end test using:
* [cucumber](https://github.com/cucumber/cucumber) with [puppeteer](https://github.com/GoogleChrome/puppeteer)
* [cucumber](https://github.com/cucumber/cucumber) on [cypress](https://github.com/cypress-io/cypress) with [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor) plugin.

### Setup
Both puppeteer and cypress tests expect the application runs on `http://localhost:3300` which can be setup by renaming the `.env.sample` to `.env` or [other names](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables#what-other-env-files-can-be-used).

### Test
Run test with the following commands:
* cucumber with puppeteer : `npm run cucumber:puppeteer`
* cucumber on cypress : `npm run cucumber:cypress`
