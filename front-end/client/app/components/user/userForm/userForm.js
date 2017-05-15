import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './userForm.html';
import userFormCtrl from './userForm.controller';
import UserFormFactory from './userForm.factory';
import UserListService from '../userList/userList.service';
import fileread from './userForm.directive';

let userFormModule = angular.module('userForm', [
  uiRouter,
])

.factory('UserFormFactory', ['$http', UserFormFactory])

.directive('fileread', [fileread])
.directive('userForm', [() => {
  return {
    restrict: 'E',
    template,
    controller: ['$scope', 'UserFormFactory', 'UserListService', userFormCtrl],
  }
}])

.name;

export default userFormModule;    

