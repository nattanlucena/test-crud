import PostFormModule from './postForm'
import PostFormController from './postForm.controller';
import PostFormComponent from './postForm.component';
import PostFormTemplate from './postForm.html';

describe('PostForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PostFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PostFormController();
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
      expect(PostFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PostFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PostFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PostFormController);
      });
  });
});
