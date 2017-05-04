import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userComponent from './user.component';
import UserForm from './userForm/userForm';
import userList from './userList/userList';

let userModule = angular.module('user', [
  uiRouter,
  UserForm,
  userList
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('user', {
      url: '/user',
      component: 'user'
    });
})


.component('user', userComponent)

.name;

export default userModule;
