import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';
import authService from '../auth.service';

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

loginComponent.controller.$inject = ['$auth', 'authService']

export default loginModule;
