class UserFormController {
  constructor(userFormFactory) {
    this.name = 'userForm';
    this.userFormFactory = userFormFactory;
    this.user = {}
  }

  addUser() {
    this.userFormFactory.addUser(this.user, (res) => {
      if (res.status === 201) {
        Materialize.toast('Well done!', 3500)
      } else if (res.status !== 201) {
        Materialize.toast('Error! Try again later!', 4500)
      }
    })
  }
}

export default UserFormController;
