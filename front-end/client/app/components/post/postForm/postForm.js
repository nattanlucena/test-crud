import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './postForm.html';
import postFormCtrl from './postForm.controller';

let postFormModule = angular.module('postForm', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('postForm', {
      url: '/post',
      template,
      controller: ['$scope', postFormCtrl],
      restrict: () => { return true }
    });
})

.name;

export default postFormModule;
