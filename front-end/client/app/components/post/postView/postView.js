import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './postView.html';
import postViewCtrl from './postView.controller';

let postViewModule = angular.module('postView', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('postView', {
      url: '/post/:id',
      template,
      controller: ['$scope', postViewCtrl],
      restrict: () => { return true }
    });
})

.name;

export default postViewModule;
