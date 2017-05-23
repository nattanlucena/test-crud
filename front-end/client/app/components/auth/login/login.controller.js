const swal = require('sweetalert2');

let LoginCtrl = ($scope, $auth, $location, AllFunctions) => {
  $scope.AllFunctions = AllFunctions;

  $scope.login = (user) => {
    $auth.login(user)
      .then((res) => {
        console.log(res)
        console.log(res)

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
      console.log(res);
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

  $scope.reset = () => {
    $scope.user = {email: null, password: null};
  }
}

export default LoginCtrl;
