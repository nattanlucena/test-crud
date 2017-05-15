import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './home.html';
import homeCtrl from './home.controller';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template,
      controller: [homeCtrl],
      restrict: () => { return true }
    });
})

.name;

export default homeModule;
