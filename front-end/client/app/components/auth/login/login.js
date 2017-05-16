import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginCtrl from './login.controller';
import template from './login.html';
import './login.scss';
import AllFunctions from '../../common/custom-alert-message';

let loginModule = angular.module('login', [
  uiRouter
])

.factory('AllFunctions', [AllFunctions])

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

.name;

export default loginModule;
