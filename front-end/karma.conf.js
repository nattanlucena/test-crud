module.exports = function (config) {
  config.set({
    // base path used to resolve all patterns
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','mocha', 'chai'],

    // list of files/patterns to load in the browser
    files: [
      { pattern: 'spec.bundle.js', watched: false },
      //'node_modules/**/angular.js',
      //'node_modules/**/angular-mocks.js',
      //'client/**/*factory.js',
      //'client/**/*service.js',
    ],
    // files:[
    // 'client/app/components/auth/login/angular.min.js',
    // 'client/app/components/auth/login/angular-mocks.js',
    // 'client/app/components/auth/login/*.js',
    // 'client/**/*.espec.js'],

    // files to exclude
    exclude: [],

    plugins: [
      require("karma-chai"),
      require("karma-chrome-launcher"),
      require("karma-mocha"),
      require("karma-mocha-reporter"),
      require("karma-sourcemap-loader"),
      require("karma-webpack"),
      require("karma-htmlfile-reporter"),
      require('karma-jasmine')
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 'spec.bundle.js': ['webpack', 'sourcemap'] },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
          { test: /\.html$/, loader: 'raw' },
          { test: /\.(scss|sass)$/, loader: 'style!css!sass' },
          { test: /\.css$/, loader: 'style!css' }
        ]
      }
    },

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'html', 'progress'],

    // web server port
    port: 9876,

    // enable colors in the output
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // toggle whether to watch files and rerun tests upon incurring changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // if true, Karma runs tests once and exits
    singleRun: true,

    htmlReporter: {
      outputFile: 'client/Reporters/units-tests-' + new Date() + '.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: 'Unit Tests',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    }

  });
};
