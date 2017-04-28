import angular from 'angular';
import Home from './home/home';
import User from './user/user';

let componentModule = angular.module('app.components', [
  Home,
  User
])

.name;

export default componentModule;
