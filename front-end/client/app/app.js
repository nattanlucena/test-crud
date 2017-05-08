import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import satellizer from 'satellizer';
import uiMask from 'angular-ui-mask';
import paginator from 'angular-utils-pagination';
import 'normalize.css';

let app = angular.module('app', [
    uiRouter,
    satellizer,
    Common,
    Components,
    uiMask,
    paginator,
  ]);

app.config(['$locationProvider', '$authProvider', ($locationProvider, $authProvider) => {
    'ngInject';

    $authProvider.httpInterceptor = () => { return true };
    $authProvider.withCredentials = false;
    $authProvider.tokenRoot = null;
    $authProvider.baseUrl = 'http://localhost:5000/api/';
    $authProvider.loginUrl = '/auth/';
    $authProvider.signupUrl = '/auth/manager/signup';
    $authProvider.unlinkUrl = '/unlink/';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer';
    $authProvider.tokenHeader = 'Authorization';
    $authProvider.tokenType = 'Bearer';
    $authProvider.storageType = 'localStorage';

    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!')
  }]);

app.component('app', AppComponent);

app.run(['$transitions', '$location', '$q', ($transitions, $location, $q) => {
    $transitions.onStart({to: '*'}, (trans) => {
      let auth = trans.injector().get('$auth');
      let state = trans.router.stateService;
      let deferred = $q.defer();
      let to = trans.to();

      if (!auth.isAuthenticated() && to.restrict()) {
        deferred.reject("Authentication is required!");
//      state.go('login') TODO: handle TransitionError
        $location.path('/auth/login')
      } else {
        deferred.resolve();
      }

      return deferred.promise;
    });
}]);
