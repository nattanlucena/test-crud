let navbarController = ($scope, $auth, $location) => {

  $scope.isAuthenticated = () => {
    return $auth.isAuthenticated();
  }

  /**
   * Logout user
   * @param {Event} e
   */
  $scope.logout = (e) => {
    e.preventDefault();
    $location.path('/auth/login');
    return $auth.logout();
  }
}

export default navbarController;
