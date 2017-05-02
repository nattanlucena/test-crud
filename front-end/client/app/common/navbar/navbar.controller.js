class NavbarController {
  constructor() {
    this.name = 'navbar';
    this.mainMenu = [
      {
        text: 'Home',
        module: 'home'
      },
      {
        text: 'Login',
        module: 'login'
      },
      {
        text: 'Signup',
        module: 'signup'
      }
    ];
  }
}

export default NavbarController;
