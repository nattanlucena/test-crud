import UserFormModule from './userForm'
import UserFormController from './userForm.controller';
import UserFormTemplate from './userForm.html';

describe('UserForm', () => {
   
    let scope, UserFactory, UserListService, controller;
    beforeEach(window.module(UserFormModule));
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new(); // this is what you missed out
        controller = $controller(UserFormController, {
            $scope: scope,
            UserFactory: UserFactory,
            UserListService: UserListService
        });
    }));

  describe('Controller', () => {

    it('Reset user',() => {
        scope.user = {email:'ericke@uol.com', password: 123};
        scope.reset();
        expect(scope.user.email).to.equal(undefined);
        expect(scope.user.password).to.equal(undefined);
    });

    it('Save User', (UserFactory) =>{ 
        let listLenght = scope.lista;
        console.log('Tamanho lista', listLenght);
        scope.user = {email:'ericke@uol.com', password: 123};
        scope.save();
       
        expect(scope.lista.length()).to.equal(listLenght + 1);
    });
  });  

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    // it('has name in template [REMOVE]', () => {
    //   expect(UserFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    // });
  });

  describe('Component', () => {
      // component/directive specs
     // let component = UserFormComponent;

      // it('includes the intended template',() => {
      //   expect(component.template).to.equal(UserFormTemplate);
      // });

      // it('invokes the right controller', () => {
      //   expect(component.controller).to.equal(UserFormController);
      // });
  });
});
