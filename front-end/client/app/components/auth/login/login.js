import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';

let loginModule = angular.module('login', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/auth/login',
      component: 'login'
    });
})

.component('login', loginComponent)

.name;

loginComponent.controller.$inject = ['$auth']

export default loginModule;
