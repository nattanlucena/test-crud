import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postComponent from './post.component';
import PostForm from './postForm/postForm';
import PostView from './postView/postView';

let postModule = angular.module('post', [
  uiRouter,
  PostForm,
  PostView,
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
