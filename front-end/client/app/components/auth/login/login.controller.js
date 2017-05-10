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
        this.$auth.setToken(res.data.token);
        this.$location.path('/home')
      })
      .catch((err) => {
        Materialize.toast(err, 3500);
      });
  }

  

  reset() {      
   this.user = {email: null, password: null};
  }
}

export default LoginController;
