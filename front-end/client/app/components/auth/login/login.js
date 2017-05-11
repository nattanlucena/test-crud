import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';
import AllFunctions from '../../function';

let loginModule = angular.module('login', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/auth/login',
      component: 'login',
      restrict: () => { return false }
    });
})

.component('login', loginComponent)

.factory('AllFunctions', AllFunctions)

.name;

loginComponent.controller.$inject = ['$auth', '$location', 'AllFunctions'];

export default loginModule;
