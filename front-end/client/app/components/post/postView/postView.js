import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postViewComponent from './postView.component';

let postViewModule = angular.module('postView', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('postView', {
      url: '/post/:id',
      component: 'postView',
      restrict: () => { return true }
    });
})

.component('postView', postViewComponent)

.name;

export default postViewModule;
