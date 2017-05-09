class UserFormController {
	
	constructor(UserFactory, userListService) {
	this.UserFactory = UserFactory;
	this.userListService = userListService;
	};

	save() {
		this.UserFactory.saveUser(this.user, (err, data) => {
			this.lista = this.userListService.get();
			this.lista.push(data.data.data);
		});
		this.reset();
	}

	reset(){
		this.user = {};
		this.photoName = '';
	}

	validaPhoto(){
		console.log('Foto2: ', this.user.photo.name);
		let array = ['jpeg', 'png', 'jpg'];
		let extension = this.user.photo.name.split(".");

		if (array.indexOf(extension[extension.length -1]) == -1){
			Materialize.toast('Invalid file extension!', 3500);
			this.photoName = '';
		}
	}

}
export default UserFormController;
