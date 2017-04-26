class NavbarController {
  constructor() {
    this.name = 'navbar';
    this.mainMenu = [
      {
        text: 'Página Inicial',
        module: 'home'
      },
      {
        text: 'Sobre',
        module: 'about'
      }
    ];
  }
}

export default NavbarController;
