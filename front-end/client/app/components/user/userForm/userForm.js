import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userFormComponent from './userForm.component';
import userFormFactory from './userForm.factory';

let userFormModule = angular.module('userForm', [
  uiRouter
])

.component('userForm', userFormComponent)

.factory('userFormFactory', userFormFactory)

.name;

userFormComponent.controller.$inject = ['userFormFactory'];
userFormFactory.$inject = ['$http'];

export default userFormModule;
