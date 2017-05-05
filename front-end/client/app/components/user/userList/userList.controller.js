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
      }
    });
  }

  userRemove(user) {
    this.UserListFactory.userRemove(user.email, (err) => {
      if (err) {
        const errorMsg = `Unable to remove user: ${err}`;
        Materialize.toast(errorMsg, 3500);
      } else {
        this.listAll();
      }
    });
  }
}

export default UserListController;
