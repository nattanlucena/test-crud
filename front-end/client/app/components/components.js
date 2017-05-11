import angular from 'angular';
import Home from './home/home';
import User from './user/user';
import Auth from './auth/auth';
import Post from './post/post';
import PostForm from './post/postForm/postForm';
import PostView from './post/postView/postView';

let componentModule = angular.module('app.components', [
  Auth,
  Home,
  User,
  Post,
  PostForm,
  PostView,
])

.name;

export default componentModule;
