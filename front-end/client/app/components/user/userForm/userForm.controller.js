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
	    	
	};	  
}
export default UserFormController;
