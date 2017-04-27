class UserFormController {
  constructor(userFormFactory) {
    this.name = 'userForm';
    this.userFormFactory = userFormFactory;
    this.user = {
      name: '',
      email: '',
      password: '123'
    }
  }

  addUser() {
    this.userFormFactory.addUser(this.user, (res) => {
      console.log('submited')
      console.log('submited')
      console.log(res)
    })
  }
}

export default UserFormController;
