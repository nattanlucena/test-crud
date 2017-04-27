import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import User from './user/user';
import UserForm from './user/userForm/userForm';

let componentModule = angular.module('app.components', [
  Home,
  About,
  User,
  UserForm
])

.name;

export default componentModule;
