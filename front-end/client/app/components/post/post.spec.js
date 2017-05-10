import PostModule from './post'
import PostController from './post.controller';
import PostComponent from './post.component';
import PostTemplate from './post.html';

describe('Post', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PostModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PostController();
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
      expect(PostTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PostComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PostTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PostController);
      });
  });
});
