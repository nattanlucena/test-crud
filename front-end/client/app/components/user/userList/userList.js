import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userListComponent from './userList.component';
import UserListFactory from './userList.factory';

let userListModule = angular.module('userList', [
  uiRouter
])

.component('userList', userListComponent)

.factory('UserListFactory', UserListFactory)

.name;

userListComponent.controller.$inject = ['UserListFactory'];
UserListFactory.$inject = ['$http'];

export default userListModule;
