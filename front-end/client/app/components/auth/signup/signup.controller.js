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

  /**
   *
   * @param user
   */
  register(user) {
    this.$auth.signup(user)
      .then((success) => {
        let response = success.data;

        const msg = `User ${response.data.name} successfully created!`;
        this.alert('Success', msg, 'success');

        this.$auth.setToken(response.token);
        this.$location.path('/home')
      })
      .catch((err) => {
        if (err.data) {
          let msg = '';
          if (typeof err.data.error === 'object') {
            Object.keys(err.data.error).forEach( (key) => {
              msg = err.data.error[key] + '\n';
            });
          } else {
            msg = err.data.error;
          }
          this.alert('Error', msg, 'error');
        } else {
          this.alert('Error', err, 'error');
        }
      });
  }

  /**
   * Custom alert dialog
   * @param title
   * @param text
   * @param type
   * @returns {*}
   */
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
