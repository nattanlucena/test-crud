import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userListComponent from './userList.component';
import UserListFactory from './userList.factory';
import userListService from './userListService';

let userListModule = angular.module('userList', [
  uiRouter
])

.component('userList', userListComponent)
.factory('userListFactory', UserListFactory)
.factory('userListService', userListService)
.name;

userListComponent.controller.$inject = ['userListFactory', 'userListService'];
UserListFactory.$inject = ['$http'];

export default userListModule;
