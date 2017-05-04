import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
      resolve : {
        authenticated : [ '$auth', '$location', '$q', ($auth, $location, $q) => {
          let deferred = $q.defer();

          if (!$auth.isAuthenticated()) {
            deferred.reject('Authentication is required');
            $location.path('/auth/login');
          } else {
            deferred.resolve()
          }

          return deferred.promise;
        }]
      }
    });
})

.component('home', homeComponent)
  
.name;

export default homeModule;
