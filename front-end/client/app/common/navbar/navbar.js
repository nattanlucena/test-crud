import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './navbar.html';
import navbarCtrl from './navbar.controller';
import './navbar.scss';

let navbarModule = angular.module('navbar', [
  uiRouter
])

.directive('navbar', [() => {
  return {
    restrict: 'E',
    controller: ['$scope', '$auth', '$location', navbarCtrl],
    template,
  };
}])

.name;

export default navbarModule;
