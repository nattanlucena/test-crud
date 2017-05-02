import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signupComponent from './signup.component';
import authService from '../auth.service';

let signupModule = angular.module('signup', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('signup', {
      url: '/auth/signup',
      component: 'signup'
    });
})

.component('signup', signupComponent)

.name;

signupComponent.controller.$inject = ['authService'];

export default signupModule;
