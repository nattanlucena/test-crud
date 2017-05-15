import angular from 'angular';
import uiRouter from 'angular-ui-router';
import login from './login/login';
import signup from './signup/signup';
import AuthService from './auth.service';

let authModule = angular.module('auth', [
  uiRouter,
  login,
  signup
])

.factory('AuthService', [AuthService])

.name;

export default authModule;
