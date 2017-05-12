const swal = require('sweetalert2');

let loginCtrl = ($scope, $auth, $location) => {
		
		/**
		 * login user and set token to request
		 * @param {Object} user
		 */
		$scope.login = (user) => {
			$auth.login(user)
				.then((res) => {
					$auth.setToken(res.data.token)
					swal({
						title: 'Welcome!',
						text: 'You will be redirected!',
						type: 'success',
						timer: 2000,
						showConfirmButton: false
					}).catch((reason) => {
						// doesn't working with $location service
						// TODO: this.$location.path('/home');
						window.location.href = '/home';
					})
				})
				.catch((res) => {
					swal({
						title: 'Opss...',
						text: res.data.error,
						type: 'error',
						timer: 4000
					}).catch((reason) => {
						$scope.reset();
					})
				});
		} 
  
		/**
		 * Reset inputs from login form
		 */
		$scope.reset = () => {      
			$scope.user = {email: null, password: null};
		}
	}

	export default loginCtrl;