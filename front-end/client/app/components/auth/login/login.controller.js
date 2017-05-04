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
    this.$auth.login(this.user);
  }

  reset(){
   this.user ={};
  } 
}

export default LoginController;
