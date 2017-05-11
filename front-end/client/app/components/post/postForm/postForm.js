import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postFormComponent from './postForm.component';
import PostService from '../post.service';

let postFormModule = angular.module('postForm', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('postForm', {
      url: '/post',
      component: 'postForm',
      restrict: () => { return true }
    });
})

.component('postForm', postFormComponent)

.factory('PostService', ['$http', PostService])

.name;

postFormComponent.controller.$inject = ['PostService']

export default postFormModule;
