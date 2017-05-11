class PostFormController {
  constructor() {
    this.name = 'postForm';

    jQuery('select').material_select();
    jQuery('.chips-placeholder').material_chip({
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag',
    });
  }
}

export default PostFormController;
