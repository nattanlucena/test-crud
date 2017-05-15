import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SignupCtrl from './signup.controller';
import template from './signup.html';
import './signup.scss';

let signupModule = angular.module('signup', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('signup', {
      url: '/auth/signup',
      controller: ['$scope', '$auth', '$location', SignupCtrl],
      template,
      restrict: () => { return false }
    });
})

.name;

export default signupModule;
