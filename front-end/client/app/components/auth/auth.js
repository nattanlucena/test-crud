import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authComponent from './auth.component';
import login from './login/login';
import signup from './signup/signup';
import authService from './auth.service';

let authModule = angular.module('auth', [
  uiRouter,
  login,
  signup
])

.component('auth', authComponent)

.factory('authService', ['$http', authService])

.name;

export default authModule;
