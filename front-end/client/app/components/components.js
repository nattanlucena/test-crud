import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import User from './user/user';

let componentModule = angular.module('app.components', [
  Home,
  About,
  User
])

.name;

export default componentModule;
