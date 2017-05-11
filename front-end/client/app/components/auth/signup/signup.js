import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signupComponent from './signup.component';

let signupModule = angular.module('signup', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('signup', {
      url: '/auth/signup',
      component: 'signup',
      restrict: () => { return false }
    });
})

.component('signup', signupComponent)

.name;

signupComponent.controller.$inject = ['$auth', '$location'];

export default signupModule;
