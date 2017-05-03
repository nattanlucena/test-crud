import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userFormComponent from './userForm.component';
import UserFactory from './userForm.factory';
import userListService from '../userList/userListService';

let userFormModule = angular.module('userForm', [
  uiRouter
])

.component('userForm', userFormComponent)
.factory('userFactory', UserFactory)

.name;

userFormComponent.controller.$inject = ['userFactory', 'userListService']; 
UserFactory.$inject = ['$http'];

export default userFormModule;    