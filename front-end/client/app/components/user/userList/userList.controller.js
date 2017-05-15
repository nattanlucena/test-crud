const swal = require('sweetalert2');

/**
 * @constructor
 *
 * @param $scope
 * @param UserListFactory
 * @param userListService
 * @param $auth
 */
let UserListCtrl = ($scope, UserListFactory, UserListService, $auth) => {

  /**
   * Resposable function for not displaying the user logged in user list
   * 
   * @param {Object} list
   */
  $scope.filterEmail = (list) => {
    return list.filter((obj) => {
      return obj.email !== $auth.getPayload().email;
    }); 
  }

  $scope.listAll = () => {
    UserListFactory.listUsers((err, data) => {
      if (err) {
        const errorMsg = `Unable to list users: ${err}`;
        Materialize.toast(errorMsg, 3500);
      } else {
        let result = $scope.filterEmail(data);
        $scope.userList = result;
        UserListService.set(result);
        $scope.lengthListUser = result.length;
      }
    });
  }

  $scope.userRemove = (user) => {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false
    }).then((confirm) => {
        if (confirm) {
            UserListFactory.userRemove(user.email, (err) => {
            if (err) {
              const errorMsg = `Unable to remove user: ${err}`;
              Materialize.toast(errorMsg, 3500);
            } else {
              swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              $scope.listAll();
            }
           });
        }
      },function (dismiss) {
        // dismiss can be 'cancel', 'overlay',
        // 'close', and 'timer'
        if (dismiss === 'cancel') {
          swal(
            'Cancelled',
            'Your user is safe :)',
            'error'
          )
        }
    });
  }

  $scope.userFilter = (email) => {
    if (typeof email === 'undefined' || email === '' || email === $auth.getPayload().email){
      $scope.listAll();
    }else{
      UserListFactory.userFilter(email, (err, data) =>{
        if (err){
          const errorMsg = `Could not fetch user: ${err}`;
          Materialize.toast(errorMsg, 3500);
        } else {
          if (data.data.data === null){
            $scope.userList = {};
            $scope.lengthListUser = 0;
          }else{
            $scope.userList = data.data;
          }
          UserListService.set(data);
        }
      });
    }
  }
}

export default UserListCtrl;
