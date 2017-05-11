import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postComponent from './post.component';
import PostService from './post.service';

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

.factory('PostService', ['$http', PostService])

.name;

postComponent.controller.$inject = ['PostService'];

export default postModule;
