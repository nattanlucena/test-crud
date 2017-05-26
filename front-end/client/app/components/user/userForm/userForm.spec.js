import UserFormModule from './userForm'
import UserFormController from './userForm.controller';
import UserFormTemplate from './userForm.html';
import UserListService from '../userList/userList.service';


describe('UserForm', () => {
   
    let $scope, controller, UserFactory;

    beforeEach(window.module(UserFormModule));

    beforeEach(inject(($controller, $rootScope, _UserFormFactory_) => {
        $scope = $rootScope; // this is what you missed out
        UserFactory = _UserFormFactory_;
        
        controller = $controller(UserFormController, {
            $scope,
            UserFactory,
            UserListService
        });
    }));

   describe('Controller', () => {
      it('Reset methode exists',() => {
          expect($scope.reset).toBeDefined();
        });

      it('Reset user',() => {
          $scope.user = {email:'ericke@uol.com', password: 123};
          $scope.reset();
          expect($scope.user.email).toEqual(undefined);
          expect($scope.user.password).toEqual(undefined);
        });

      it('Save User', () => { 
        
          let listLenght = $scope.lista.length;
          console.log('Lista', $scope.lista);
          let user = {email:'ericke@uol.com', password: 123 };
          
          $scope.user = user;
          $scope.save();
          //$scope.lista.push(user);

          expect($scope.lista.length).toEqual(listLenght + 1);
        });
    });  

  describe('Factorys - Services', () => {

      it('should evaluate the injected UserFactory.save',() => {
       expect(UserFactory.saveUser).toBeDefined();
      });

      it('should evaluate the injected UserListService',() => {
          expect(UserListService).toBeDefined();
      });

  });

  describe('Component', () => {
      // component/directive specs
     //let component = UserFormComponent;

      //it('includes the intended template',() => {
       // expect(component.template).to.equal(UserFormTemplate);
      //});

      // it('invokes the right controller', () => {
      //   expect(component.controller).to.equal(UserFormController);
      // });
  });
});
