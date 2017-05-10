const swal = require('sweetalert2');

class LoginController {
  /**
   * Constructor
   *
   * @param $auth
   * @param $location
   */
  constructor($auth, $location) {
    this.name = 'login';
    this.$auth = $auth;
    this.$location = $location;
  }

  /**
   * Login method
   *
   * @param user
   */
  login(user) {
    this.$auth.login(user)
      .then((res) => {
        this.$auth.setToken(res.data.token)
        swal({
          title: 'Welcome!',
          text: 'You will be redirected!',
          type: 'success',
          timer: 4000
        }).catch((reason) => {
          // doesn't working with $location service
          // TODO: this.$location.path('/home');
          window.location.href = '/home';
        })
      })
      .catch((res) => {
        swal({
          title: 'Opss...',
          text: res.data.error,
          type: 'error',
          timer: 4000
        }).catch((reason) => {
          this.reset();
        })
      });
  } 

  reset() {      
   this.user = {email: null, password: null};
  }
}

export default LoginController;
