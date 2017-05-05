class SignupController {

  /**
   * @constructor
   *
   * @param $auth
   * @param $location
   */
  constructor($auth, $location) {
    this.name = 'signup';
    this.$auth = $auth;
    this.$location = $location;
    this.user = {};
  }

  register(user) {
    this.$auth.signup(user)
      .then((success) => {
        const msg = `User ${success.data.data.name} successfully created!`;
        this.alert('Success', msg, 'success');
        this.$location.path('/auth/login')
      })
      .catch((err) => {
        console.log(typeof err.data);
        if (err.data) {
          // console.log(err.data);
          let msg = '';
          if (typeof err.data.error === 'object') {
            Object.keys(err.data.error).forEach( (key) => {
              console.log(key);
              msg = err.data.error[key] + '\n';
            });
          } else {
            console.log('aqui');
            msg = err.data.error;
          }
          this.alert('Error', msg, 'error');
        } else {
          console.log(err);
        }
        //Materialize.toast(err.data.error, 3500)
      });
  }


  alert(title, text, type) {
    let timer = 'succes' ? 3500 : 2000;
    return swal({
      title: title,
      type: type,
      text: text,
      showConfirmButton: false,
      timer: timer
    });
  }

  reset(){
    this.user = {};
  }

}

export default SignupController;
