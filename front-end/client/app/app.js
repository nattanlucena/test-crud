import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import satellizer from 'satellizer';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    satellizer,
    Common,
    Components,
  ])

  .config(['$locationProvider', '$authProvider', function($locationProvider, $authProvider) {
    "ngInject";

    $authProvider.httpInterceptor = function() { return true; },
    $authProvider.withCredentials = false;
    $authProvider.tokenRoot = null;
    $authProvider.baseUrl = 'http://localhost:5000/api/';
    $authProvider.loginUrl = '/auth/';
    $authProvider.signupUrl = '/signup/';
    $authProvider.unlinkUrl = '/unlink/';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer';
    $authProvider.tokenHeader = 'Authorization';
    $authProvider.tokenType = 'Bearer';
    $authProvider.storageType = 'localStorage';

    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!')
  }])

  .component('app', AppComponent)
