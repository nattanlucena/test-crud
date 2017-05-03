class LoginController {
  constructor($auth) {
    this.name = 'login';
    this.$auth = $auth;
    this.user = {
      username: '',
      password: ''
    };
  }

  login() {
    console.log('Inside login controller function')
    this.$auth.login(this.user);
  }
}

export default LoginController;
