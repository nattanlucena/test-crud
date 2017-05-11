const swal = require('sweetalert2');

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
     */
    jQuery('select').material_select();

    /**
     * init chip script
     */
    jQuery('.chips-placeholder').material_chip({
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag',
    });

    /**
     * push added tag to array to be send
     * @param {Event} e 
     * @param {Object} chip
     */
    jQuery('.chips').on('chip.add', (e, chip) => {
      this.form.tags.push({tag: chip.tag});
    });

    /**
     * pop tag from tags
     * @param {Event} e
     * @param {Object} chip
     */
    jQuery('.chips').on('chip.delete', (e, chip) => {
      this.form.tags.pop(chip.tag);
      return true;
    });
  }
  
  /**
   * Save Post ...
   * @param {Event} e
   */
  savePost(e, post) {
    e.preventDefault();
    this.PostService.addPost(post, (err, res) => {
      if (err.statusText !== 'OK') {
        return swal({
          title: 'Opss...',
          type: 'error',
          text: 'Check your infos and try again!',
          showConfirmButton: false,
          timer: 2000
        }).catch(swal.noop);
      }

      return swal({
          title: 'Well Done!',
          type: 'success',
          text: 'Your post was published!',
          showConfirmButton: false,
          timer: 2000
        }).catch(swal.noop);
    })
  }
}

export default PostFormController;
