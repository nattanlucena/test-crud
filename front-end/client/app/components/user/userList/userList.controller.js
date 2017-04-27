class UserListController {
  constructor(userListFactory) {
    this.name = 'userList';
    this.userListFactory = userListFactory;
    this.userList = []
  }

  initUserList() {
    this.userListFactory.getUsers((res) => {
      this.userList = res.data.data;
    })
  };
}

export default UserListController;
