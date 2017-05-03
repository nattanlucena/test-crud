import angular from 'angular';
import Home from './home/home';
import User from './user/user';
import Auth from './auth/auth';

let componentModule = angular.module('app.components', [
  Auth,
  Home,
  User,
])

.name;

export default componentModule;
