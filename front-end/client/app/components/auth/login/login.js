import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginCtrl from './login.controller';
import template from './login.html';

let loginModule = angular.module('login', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/auth/login',
      template,
      controller: ['$scope', '$auth', '$location', loginCtrl],
      restrict: () => { return false }
    });
})

.name;

export default loginModule;
