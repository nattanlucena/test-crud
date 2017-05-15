import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './userList.html';
import userListCtrl from './userList.controller';
import UserListFactory from './userList.factory';
import UserListService from './userList.service';

let userListModule = angular.module('userList', [
  uiRouter
])

.factory('UserListFactory', ['$http', UserListFactory])
.factory('UserListService', [UserListService]) // TODO: Rename this service.

.directive('userList', [() => {
  return {
    restrict: 'E',
    template,
    controller: ['$scope', 'UserListFactory', 'UserListService', '$auth', userListCtrl]
  }
}])

.name;

export default userListModule;
