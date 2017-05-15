let PostFormCtrl = ($scope) => {
  
  /**
   * Init jQuery Plugins
   */
  (($) => {
    $('select').material_select();
    $('.chips-placeholder').material_chip({
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag',
    });
  })(jQuery)

}

export default PostFormCtrl;
