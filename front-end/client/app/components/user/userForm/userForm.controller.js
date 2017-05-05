class UserFormController {
	constructor(UserFactory, userListService) {
	    this.UserFactory = UserFactory;	
	    this.password = '12345';
	    this.userListService = userListService;
	};  

	save() {
		this.user.password = this.password; 
	    this.UserFactory.saveUser(this.user, (data) => { 
		    this.lista = this.userListService.get();
		    this.lista.push(data.data.data);	
	    });
	    this.reset();
	}	

	reset(){
		this.user = {};
	}

	validaPhoto(){
		let array = ['jpeg', 'png', 'jpg'];
		let extensao = this.user.photo.split(".");
		
		if (array.indexOf(extensao[extensao.length -1]) == -1){
			Materialize.toast('Extensão do arquivo inválida!', 3500);
			this.user.photo = '';
		}	
	}  
}
export default UserFormController;
