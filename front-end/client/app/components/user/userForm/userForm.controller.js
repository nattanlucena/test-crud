class UserFormController {
  constructor(UserFactory, userListService) {
    this.UserFactory = UserFactory;
    this.userListService = userListService;
  };

  save() {
    this.UserFactory.saveUser(this.user, (data) => {
      this.lista = this.userListService.get();
      this.lista.push(data.data.data);
    });
    this.reset();
  }

  reset(){
    this.user = {};
  }
}
export default UserFormController;
