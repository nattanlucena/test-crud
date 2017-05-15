const swal = require('sweetalert2');

let SignupCtrl = ($scope, $auth, $location) => {
  $scope.user = {}

  $scope.register = (user) => {
    $auth.signup(user)
      .then((success) => {
        let response = success.data;
        const msg = `User ${response.data.name} successfully created!`;

        $scope.alert('Success', msg, 'success');
        $auth.setToken(response.token);
        $location.path('/home')
      })
      .catch((err) => {
        if (err.data) {
          let msg = '';
          if (typeof err.data.error === 'object') {
            Object.keys(err.data.error).forEach( (key) => {
              msg = err.data.error[key] + '\n';
            });
          } else {
            msg = err.data.error;
          }
          $scope.alert('Error', msg, 'error');
        } else {
          $scope.alert('Error', err, 'error');
        }
      });
  }

  /**
   * Custom alert dialog
   * @param title
   * @param text
   * @param type
   * @returns {*}
   */
  $scope.alert = (title, text, type) => {
    let timer = 'succes' ? 3500 : 2000;
    return swal({
      title: title,
      type: type,
      text: text,
      showConfirmButton: false,
      timer: timer
    }).catch(swal.noop);
  }

  $scope.reset = () => {
    $scope.user = {};
  }

}

export default SignupCtrl;
