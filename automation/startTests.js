var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    highlightDelay: 100,

    multiCapabilities: [
        {'browserName': 'chrome'},
    ],

    specs: [
        //'home/test-home/test-home-it.js'
       'cadastro/test-cadastro-user/test-cadastro-user-it.js'
    ],

    framework: 'jasmine2',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1000000
    }
    ,

    onPrepare: function () {

        browser.driver.manage().window().maximize();

        //Gerar relatório no terminal dos resultados dos teste
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

        //Gerar relatório de execução dos teste automáticos em index.html
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                takeScreenshots: true,
                takeScreenshotsOnlyOnFailures: true,
                filePrefix: 'index'
            })
        );
    }
};