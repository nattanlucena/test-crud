import LoginModule from './login'
import LoginController from './login.controller';
import LoginTemplate from './login.html';
//import AllFunctions from '../../common/custom-alert-message';


describe('Login', () => {
  
  let $rootScope, makeController,controller;

  beforeEach(window.module(LoginModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
  
    makeController = () => {
     return new LoginController(AllFunctions);

   };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('Reset User', () => { // erase if removing this.name from the controller
      let controller = makeController();
      console.log('Controller', controller);
      LoginController.user = {email: 'ericke@uol.com.br', password: 123};
      controller.reset();
      expect(LoginController.user.email).tobe(null);
    });

  //   it('Login User', () => { // erase if removing this.name from the controller
  //     let controller = makeController();
  //     let user = {email: 'ericke@uol.com.br', password: 123};
  //     LoginController.login(user);
  //    // expect(controller.user.email).tobe(null);
  //   });

   });

  // describe('Template', () => {
  //   // template specs
  //   // tip: use regex to ensure correct bindings are used e.g., {{  }}
  // });

  
});
