//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
//var HtmlScreenshotReporter = require('protractor-html-screenshot-reporter');
//var htmlSpcReporter = require('jasmine-spec-reporter');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'ReportJasmine',
    showSummary: true,
    showQuickLinks: true,
    showConfiguration: true,
    screenshotsFolder: 'images',
    takeScreenshots: true,
    takeScreenshotsOnlyOnFailures: true,
    fixedScreenshotName: true,
    ignoreSkippedSpecs: false,
    consolidate: true,
    consolidateAll: true,
    preserveDirectory: true,
    reportTitle: 'Testlauf_',
    fileNameSeparator: '_',
    fileNameDateSuffix: true,
    cleanDestination: false,
    filename: 'MyReportRoque.html'
});


exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    highlightDelay: 10,

    multiCapabilities: [
        {'browserName': 'chrome'},
    ],

    specs: [
        //'Tests/Home/test_home.js',
        'Tests/Login/test_login.js'
        //'Tests/Signup/test_signup.js',
    ],

    framework: 'jasmine2',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1000000
    }
    ,

    onPrepare: function () {

        browser.driver.manage().window().maximize();

        jasmine.getEnv().addReporter(reporter);

        var Reporter = require('jasmine-spec-reporter').SpecReporter;


        jasmine.getEnv().addReporter(new Reporter({
            displayFailuresSummary: true, // display summary of all failures after execution
            displayFailedSpec: true,      // display each failed spec
            displaySuiteNumber: true,    // display each suite number (hierarchical)
            displaySpecDuration: true,   // display each spec duration
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                pending: '* '
            }

        }));
    }
};
