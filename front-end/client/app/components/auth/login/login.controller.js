const swal = require('sweetalert2');

let LoginCtrl = ($scope, $auth, $location, AllFunctions) => {
  $scope.AllFunctions = AllFunctions;

  /**
   * login user and set token to request
   * @param {Object} user
   */
  $scope.login = (user) => {
    $auth.login(user)
      .then((res) => {
        $auth.setToken(res.data.token)

        let options = {
          title: 'Welcome',
          text: 'You will be redirected!',
          timer: 2000,
          showButton: false
        }

        $scope.AllFunctions.successMessage(options, (err) => {
          if (!err) {
            window.location.href = '/home';
          }
        });
      
      }).catch((res) => {
          let options = {
              title: 'Opss...',
              text: res.data.error,
              timer: 2000,
              showButton: false
            }

          $scope.AllFunctions.errorMessage(options, (err) => {
            if (!err) {
              $scope.reset();
            }
          });  
      });
  }

  /**
   * Reset inputs from login form
   */
  $scope.reset = () => {      
    $scope.user = {email: null, password: null};
  }
}

export default LoginCtrl;