import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authComponent from './auth.component';
import login from './login/login';
import signup from './signup/signup';

let authModule = angular.module('auth', [
  uiRouter,
  login,
  signup
])

.component('auth', authComponent)

.name;

export default authModule;
