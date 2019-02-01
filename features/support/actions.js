// Dependencies
const scope = require('./scope');

// Defines whether puppeteer runs Chrome in headless mode.
let headless = true;
let slowMo = 0;
// Chrome is set to run headlessly and with no slowdown in CircleCI
if (process.env.CIRCLECI) headless = true;
if (process.env.CIRCLECI) slowMo = 0;

const visitHomePage = async () => {
	if (!scope.browser)
		scope.browser = await scope.driver.launch({ headless, slowMo });
	scope.context.currentPage = await scope.browser.newPage();
	scope.context.currentPage.setViewport({ width: 1280, height: 1024 });
	const url = scope.host;
	const visit = await scope.context.currentPage.goto(url, {
		waitUntil: 'networkidle2'
	});
	return visit;
};

const delay = duration => new Promise(resolve => setTimeout(resolve, duration));

const showHomePage = async () => {
	await delay(100);
	const { currentPage } = scope.context;
	const content = await currentPage.content();
	if (!content.includes("Learn React")) {
		throw new Error(
			`Expected page to contain text: "Learn React", but page contains only: ${content}`
		);
	}
};

module.exports = {
	visitHomePage,
	showHomePage
};