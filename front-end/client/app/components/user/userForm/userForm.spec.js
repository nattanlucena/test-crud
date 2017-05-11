import UserFormModule from './userForm'
import UserFormController from './userForm.controller';
import UserFormComponent from './userForm.component';
import UserFormTemplate from './userForm.html';

describe('UserForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UserFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UserFormController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(UserFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UserFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UserFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UserFormController);
      });
  });
});
