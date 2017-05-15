import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './user.html';
import UserForm from './userForm/userForm';
import userList from './userList/userList';
import './user.scss';

let userModule = angular.module('user', [
  uiRouter,
  UserForm,
  userList
])

.directive('user', [() => {
  return {
    restrict: 'E',
    template,
  };
}])

.name;

export default userModule;
