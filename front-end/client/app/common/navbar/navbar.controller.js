class NavbarController {
  constructor($auth, $location) {
    this.name = 'navbar';
    this.$auth = $auth;
    this.$location = $location;
  }

  isAuthenticated() {
    return this.$auth.isAuthenticated();
  }

  logout(e) {
    e.preventDefault();
    this.$location.path('/auth/login');
    return this.$auth.logout();
  }
}

export default NavbarController;
