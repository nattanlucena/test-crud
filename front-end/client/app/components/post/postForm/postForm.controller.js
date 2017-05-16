let PostFormCtrl = ($scope) => {
  
  (($) => {
    $('select').material_select();
    $('.chips-placeholder').material_chip({
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag',
    });
  })(jQuery)

}

export default PostFormCtrl;
