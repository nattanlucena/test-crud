import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postComponent from './post.component';

let postModule = angular.module('post', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('post', {
      url: '/posts',
      component: 'post',
      restrict: () => { return true }
    });
})

.component('post', postComponent)

.name;

export default postModule;
