import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SignupCtrl from './signup.controller';
import template from './signup.html';

let signupModule = angular.module('signup', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('signup', {
      url: '/auth/signup',
      controller: ['$auth', '$location', SignupCtrl],
      template,
      restrict: () => { return false }
    });
})

.name;

export default signupModule;
