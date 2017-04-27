import UserListModule from './userList'
import UserListController from './userList.controller';
import UserListComponent from './userList.component';
import UserListTemplate from './userList.html';

describe('UserList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UserListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UserListController();
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
      expect(UserListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UserListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UserListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UserListController);
      });
  });
});
