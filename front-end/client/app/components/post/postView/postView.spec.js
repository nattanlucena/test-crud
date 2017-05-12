import PostViewModule from './postView'
import PostViewController from './postView.controller';
import PostViewComponent from './postView.component';
import PostViewTemplate from './postView.html';

describe('PostView', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PostViewModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PostViewController();
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
      expect(PostViewTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PostViewComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PostViewTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PostViewController);
      });
  });
});
