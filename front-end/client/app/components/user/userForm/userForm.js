import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './userForm.html';
import userFormCtrl from './userForm.controller';
import userFormFactory from './userForm.factory';
import userListService from '../userList/userListService';
import fileread from './userForm.directive';

let userFormModule = angular.module('userForm', [
  uiRouter,
])

.directive('fileread', [fileread])
.directive('userForm', [() => {
  return {
    restrict: 'E',
    template,
    controller: ['userFormFactory', 'userListService', userFormCtrl],
  }
}])

.factory('userFormFactory', ['$http', userFormFactory])

.name;

export default userFormModule;    

