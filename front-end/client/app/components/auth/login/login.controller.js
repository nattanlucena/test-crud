class LoginController {
  constructor($auth, ) {
    this.name = 'login';
    this.$auth = $auth;
  }

  login(user) {
    this.$auth.login(user)
      .then((res) => {
        console.log(res)
        // Materialize.toast('Well done!', 3000);
        this.$auth.setToken(res.data.token)
        console.log(this.$auth.getToken())
      })
      .catch((err) => {
        console.log(err)
        // Materialize.toast(err.data.error, 3500);
      });
  }
}

export default LoginController;
