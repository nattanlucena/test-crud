import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginCtrl from './login.controller';
import template from './login.html';
import AllFunctions from '../../common/custom-alert-message';

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
      controller: ['$scope', '$auth', '$location', 'AllFunctions', loginCtrl],
      restrict: () => { return false }
    });
})

.factory('AllFunctions', [AllFunctions])

.name;

export default loginModule;
