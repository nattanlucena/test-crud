const swal = require('sweetalert2');

class LoginController {
  /**
   * Constructor
   *
   * @param $auth
   * @param $location
   */
  constructor($auth, $location, AllFunctions) {
    this.name = 'login';
    this.$auth = $auth;
    this.$location = $location;
    this.AllFunctions = AllFunctions;
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

        let options = {
          title: 'Welcome',
          text: 'You will be redirected!',
          timer: 2000,
          showButton: false
        }

        this.AllFunctions.successMessage(options, (err) => {
          if (!err) {
            window.location.href = '/home';
          }
        });
      
      }).catch((res) => {
          let  options = {
              title: 'Opss...',
              text: res.data.error,
              timer: 2000,
              showButton: false
            }

          this.AllFunctions.errorMessage(options, (err) => {
            if (!err) {
              this.reset();
            }
          });  
      });
  } 
  
  reset() {      
   this.user = {email: null, password: null};
  }
}

export default LoginController;
