class PostFormController {
  constructor(PostService) {
    this.PostService = PostService;
    this.name = 'postForm';
    this.form = {
      title: '',
      content: '',
      category: [],
      tags: [],
      author: {},
    };

    /**
     * init input select script
     * 
     */
    jQuery('select').material_select();

    /**
     * init chip script
     * 
     */
    jQuery('.chips-placeholder').material_chip({
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag',
    });

    /**
     * push added tag to array to be send
     * @param e: Event
     * @param chip: Object added
     * 
     */
    jQuery('.chips').on('chip.add', function(e, chip) {
      this.form.tags.push(chip.tag);
      return true;
    });

    /**
     * pop tag from tags
     * @param e: Event
     * @param chip: Object deleted
     * 
     */
    jQuery('.chips').on('chip.delete', function(e, chip) {
      this.form.tags.pop(chip.tag);
      return true;
    });
  }

  savePost() {
    
  }
}

export default PostFormController;
