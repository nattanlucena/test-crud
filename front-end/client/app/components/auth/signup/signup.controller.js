class SignupController {
  constructor(authService) {
    this.name = 'signup';
    this.authService = authService;
    this.user = {};
  }

  register() {
    this.authService.register(this.user, (err, res) => {
      if (err || res.status !== 201) {
        Materialize.toast(err, 3500)
      } else if (res.status === 201) {
        Materialize.toast('Well done!', 3500)
      }
    })
  }

  reset(){
    this.user = {};
  } 
}

export default SignupController;
