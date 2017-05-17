import LoginModule from './login'
import LoginController from './login.controller';
import LoginTemplate from './login.html';
//import AllFunctions from '../../common/custom-alert-message';


describe('Login', () => {
  var scope, $location, createController, $auth, AllFunctions;
  beforeEach(window.module('login'));
  beforeEach(inject(function ($rootScope, $controller, _$auth_, _$location_, _AllFunctions_) {
        $location = _$location_;
        $auth = _$auth_;
        AllFunctions =_AllFunctions_;
        scope = $rootScope.$new();
        console.log('Scopo', scope);

        createController = function() {
            return $controller('LoginCtrl', {
                '$scope': scope, '$auth': $auth, 'AllFunctions': AllFunctions
            });
        };
    }));

    it('should have a method to check if the path is active', function() {
        var controller = createController();
        scope.user.email = 'longerthaneightchars';
        scope.reset();
        expect($scope.user.email).toEqual(null);
    });

  // beforeEach(angular.mock.module('calculatorApp'));
  // let $controller;

  // beforeEach(angular.mock.inject(function(_$controller_){
  //   // The injector unwraps the underscores (_) from around the parameter names when matching
  //   $controller = _$controller_;
  // }));

  // describe('$scope.grade', function() {
  //   it('sets the strength to "strong" if the password length is >8 chars', function() {
  //     let $scope = {};
  //     let controller = $controller(LoginController, { $scope: $scope });
  //     $scope.user.email = 'longerthaneightchars';
  //     $scope.reset();
  //     expect($scope.user.email).toEqual(null);
  //   });
  //});

  // let $rootScope, makeController,controller;

  // beforeEach(window.module(LoginModule));
  // beforeEach(inject((_$rootScope_) => {
  //   $rootScope = _$rootScope_;
  
  //   makeController = () => {
  //    return new LoginController(AllFunctions);

  //  };
  // }));

  // describe('Module', () => {
  //   // top-level specs: i.e., routes, injection, naming
  // });

  // describe('Controller', () => {
  //   // controller specs
  //   it('Reset User', () => { // erase if removing this.name from the controller
  //     let controller = makeController();
  //     console.log('Controller', controller);
  //     LoginController.user = {email: 'ericke@uol.com.br', password: 123};
  //     controller.reset();
  //     expect(LoginController.user.email).tobe(null);
  //   });

  //   it('Login User', () => { // erase if removing this.name from the controller
  //     let controller = makeController();
  //     let user = {email: 'ericke@uol.com.br', password: 123};
  //     LoginController.login(user);
  //    // expect(controller.user.email).tobe(null);
  //   });

  // });

  // describe('Template', () => {
  //   // template specs
  //   // tip: use regex to ensure correct bindings are used e.g., {{  }}
  // });

  
});
