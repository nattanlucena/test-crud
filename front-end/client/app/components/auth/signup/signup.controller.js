class SignupController {
  constructor($auth, $location) {
    this.name = 'signup';
    this.$auth = $auth;
    this.$location = $location;
    this.user = {};
  }

  register(user) {
    this.$auth.signup(user)
      .then((res) => {
        Materialize.toast('Well done!', 3500)
        this.$location.path('/auth/login')
      })
      .catch((err) => {
        Materialize.toast(err.data.error, 3500)
      });
  }
}

export default SignupController;
