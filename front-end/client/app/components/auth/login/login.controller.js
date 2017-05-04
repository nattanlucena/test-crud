class LoginController {
  constructor($auth, $location) {
    this.name = 'login';
    this.$auth = $auth;
    this.$location = $location;
  }

  login(user) {
    this.$auth.login(user)
      .then((res) => {
        this.$auth.setToken(res.data.token)
        this.$location.path('/home')
      })
      .catch((err) => {
        Materialize.toast(err, 3500);
      });  
}

export default LoginController;
