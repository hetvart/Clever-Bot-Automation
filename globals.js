var HtmlReporter = require('/usr/local/lib/node_modules/nightwatch-html-reporter');
var reporter = new HtmlReporter({
	openBrowser: true,
	uniqueFilename: true,
	reportsDirectory: '/Users/mirra/Projects/js/Clever-Bot-Automation/reports',
	reportFilename: 'report.html'
});

module.exports = {
	reporter: reporter.fn,
};