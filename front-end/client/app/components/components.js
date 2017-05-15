import angular from 'angular';
import Home from './home/home';
import User from './user/user';
import Auth from './auth/auth';
import Post from './post/post';

let componentModule = angular.module('app.components', [
  Auth,
  Home,
  User,
  Post,
])

.name;

export default componentModule;
