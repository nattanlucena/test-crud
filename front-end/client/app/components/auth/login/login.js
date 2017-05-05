import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';

let loginModule = angular.module('login', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/auth/login',
      component: 'login',
      resolve : {
        authenticated : [ '$auth', '$location', '$q', ($auth, $location, $q) => {
          let deferred = $q.defer();

          if (!$auth.isAuthenticated()) {
            deferred.resolve()
          } else {
            deferred.reject("You already logged in!");
            $location.path('/home');
          }

          return deferred.promise;
        }]
      }
    });
})

.component('login', loginComponent)

.name;

loginComponent.controller.$inject = ['$auth', '$location', '$q'];

export default loginModule;
