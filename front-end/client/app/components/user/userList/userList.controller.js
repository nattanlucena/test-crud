class UserListController {

  /**
   * @constructor
   *
   * @param UserListFactory
   * @param userListService
   */
  constructor(UserListFactory, userListService) {
    this.name = 'userList';
    this.UserListFactory = UserListFactory;
    this.userListService = userListService;
    this.listAll();
  }

  listAll() {
    this.UserListFactory.listUsers((err, data) => {
      if (err) {
        const errorMsg = `Unable to list users: ${err}`;
        Materialize.toast(errorMsg, 3500);
      } else {
        this.userList = data;
        this.userListService.set(data);
        this.lengthListUser = data.length;
      }
    });
  }

  userRemove(user) {
    this.UserListFactory.userRemove(user.email, (err) => {
      if (err) {
        console.log(err);
        const errorMsg = `Unable to remove user: ${err}`;
        Materialize.toast(errorMsg, 3500);
      } else {
        Materialize.toast('User removed', 3500);
        this.listAll();
      }
    });
  }

  userFilter(email) {
    if (typeof email === 'undefined' || email === ''){
      this.listAll();
    }else{
      this.UserListFactory.userFilter(email, (err, data) =>{
        if (err){
          const errorMsg = `Could not fetch user: ${err}`;
          Materialize.toast(errorMsg, 3500);
        } else {
          if (data.data.data === null){
            this.userList = {};
            this.lengthListUser = 0;
          }else{
            this.userList = data.data;
          }          
          this.userListService.set(data);  
        }
      });
    } 
  }
}

export default UserListController;
