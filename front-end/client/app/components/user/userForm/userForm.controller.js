let UserFormCtrl = ($scope, UserFactory, UserListService) => {
	$scope.user = {};
	$scope.lista = [
					{name: 'ericke', idade: 18, password: 123},
					{name: 'teste', idade: 18, password: 1234}
				   ];
	$scope.save = () => {
	    UserFactory.saveUser($scope.user, (err, user) => {
		  	if (err) {
		  	    Materialize.toast('Opss...! ' + err, 3500);	
		  	}
			$scope.lista = UserListService.get();
			$scope.lista.push(user.data);
		});

		$scope.reset();
	}

	$scope.reset = () => {
		$scope.user = {};
		$scope.photoName = '';
	}

	$scope.validaPhoto = () => {
		let array = ['jpeg', 'png', 'jpg'];
		let extension = this.user.photo.name.split(".");

		if (array.indexOf(extension[extension.length -1]) == -1){
			Materialize.toast('Invalid file extension!', 3500);
			$scope.photoName = '';
		}
	}

}
export default UserFormCtrl;
