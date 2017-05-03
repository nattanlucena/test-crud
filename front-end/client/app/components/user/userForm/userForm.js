import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userFormComponent from './userForm.component';
import userFormFactory from './userForm.factory';
import userListService from '../userList/userListService';

let userFormModule = angular.module('userForm', [
  uiRouter
])

.component('userForm', userFormComponent)

.factory('userFormFactory', userFormFactory)

.name;

userFormComponent.controller.$inject = ['userFormFactory', 'userListService']; 
userFormFactory.$inject = ['$http'];

export default userFormModule;    

