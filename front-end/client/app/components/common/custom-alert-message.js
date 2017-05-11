const swal = require('sweetalert2');

let AllFunctions = function () {

  return {

    successMessage: (options, callback) => {
        swal({
          title: options.title || 'Success',
          text: options.text || 'OK',
          type: 'success',
          timer: options.timer || 2000,
          showConfirmButton: options.showButton
        }).catch((reason) => {
          callback(null, 'ok');
        })
    },

    errorMessage: (options, callback) => {
        swal({
          title: options.title || 'Error',
          text: options.text || 'Error',
          type: 'error',
          timer: options.timer || 2000,
          showConfirmButton: options.showButton
        }).catch((reason) => {
          callback(null, 'ok');
        })
    }
  };

};

export default AllFunctions;
