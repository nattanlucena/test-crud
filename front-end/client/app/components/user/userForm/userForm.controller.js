let UserFormCtrl = ($scope, UserFactory, userListService) => {
	$scope.user = {};

	$scope.save = () => {
		$scope.UserFactory.saveUser($scope.user, (err, user) => {
		  //TODO: handle error
			$scope.lista = $scope.userListService.get();
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
