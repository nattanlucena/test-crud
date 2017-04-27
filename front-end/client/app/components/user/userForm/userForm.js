import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userFormComponent from './userForm.component';

let userFormModule = angular.module('userForm', [
  uiRouter
])

.component('userForm', userFormComponent)

.name;

export default userFormModule;
