import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './post.html';
import postCtrl from './post.controller';
import PostService from './post.service';
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
      template,
      controller: [postCtrl],
      restrict: () => { return true }
    });
})

.factory('PostService', ['$http', PostService])

.name;

export default postModule;
