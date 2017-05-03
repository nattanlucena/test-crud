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
		var id = user._id;
		this.UserListFactory.userRemove(id, (err, success) => {
			if (err) {
				console.log('Erro');
			}else{
				this.listAll();
			}
			
		});
	}   
}

export default UserListController;
