import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userListCtrl from './userList.controller';
import UserListFactory from './userList.factory';
import UserListService from './userListService';

let userListModule = angular.module('userList', [
  uiRouter
])

.directive('userList', [() => {
  return {
    restrict: 'E',
    template,
    controller: ['$scope', 'UserListFactory', 'userListService', '$auth', userListCtrl]
  }
}])

.factory('userListFactory', ['$http', UserListFactory])
.factory('UserListService', [UserListService]) // TODO: Rename this service.

.name;

export default userListModule;
