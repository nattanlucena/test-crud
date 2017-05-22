import UserFormModule from './userForm'
import UserFormController from './userForm.controller';
import UserFormTemplate from './userForm.html';


describe('UserForm', () => {
   
    let $scope, controller, UserFactory, UserListService;

    beforeEach(window.module(UserFormModule));
    beforeEach(inject(($controller, $rootScope) => {
        $scope = $rootScope.$new(); // this is what you missed out
        //UserFactory = UserFactory;
       // UserListService = UserListService;
        
        controller = $controller(UserFormController, {
            $scope,
            UserFactory,
            UserListService,
        });
    }));

   describe('Controller', () => {
    // beforeEach(function(){
    //   console.log('Escope', scope);
    //   let deferred = q.defer();
    //   spyOn(UserFactory, 'saveUser').and.returnValue(deferred.promise);
    //   scope.save();
    // });

    // it('should call AuthService', function() {     
    //   expect(userFactory.saveUser).toHaveBeenCalled();
    // });

    it('Reset user',() => {
        $scope.user = {email:'ericke@uol.com', password: 123};
        $scope.reset();
        expect($scope.user.email).to.equal(undefined);
        expect($scope.user.password).to.equal(undefined);
    });

    xit('Save User', () =>{ 
        let listLenght = $scope.lista.length;
        console.log('Tamanho lista: ', listLenght);
        $scope.user = {email:'ericke@uol.com', password: 123};
        $scope.save();
        expect($scope.lista.length).to.equal(listLenght + 1);
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
