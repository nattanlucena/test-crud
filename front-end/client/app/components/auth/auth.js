import angular from 'angular';
import uiRouter from 'angular-ui-router';
//import authCtrl from './auth.controller';
import login from './login/login';
import signup from './signup/signup';

let authModule = angular.module('auth', [
  uiRouter,
  login,
  signup
])

.name;

export default authModule;
