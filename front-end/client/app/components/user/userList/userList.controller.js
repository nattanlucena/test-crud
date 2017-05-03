class UserListController {
  constructor(UserListFactory, userListService) {
    this.name = 'userList';
    this.UserListFactory = UserListFactory;
    this.userListService = userListService;
    this.listAll();
  }

	listAll(){

		this.UserListFactory.listUsers((data) => { 
	    	this.userList = data;
	    	this.userListService.set(data);
	    });
	}

	userRemove(user){
		this.UserListFactory.userRemove(user.email, (err, success) => {
			if (err) {
				console.log('Erro');
			}else{
				this.listAll();
			}
			
		});
	}   
}

export default UserListController;
