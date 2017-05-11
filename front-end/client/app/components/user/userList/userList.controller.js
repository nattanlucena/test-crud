const swal = require('sweetalert2');

class UserListController {

  /**
   * @constructor
   *
   * @param UserListFactory
   * @param userListService
   */
  constructor(UserListFactory, userListService, $auth) {
    this.name = 'userList';
    this.UserListFactory = UserListFactory;
    this.userListService = userListService;
    this.$auth = $auth;
    this.listAll();
  }
  /**
   Resposable function for not displaying the user logged in user list
   */
  filterEmail(list) {
    return list.filter((obj) => {
      return obj.email !== this.$auth.getPayload().email;
    }); 
  }

  listAll() {

    this.UserListFactory.listUsers((err, data) => {
      if (err) {
        const errorMsg = `Unable to list users: ${err}`;
        Materialize.toast(errorMsg, 3500);
      } else {
        let result = this.filterEmail(data);
        this.userList = result;
        this.userListService.set(result);
        this.lengthListUser = result.length;
      }
    });
  }

  userRemove(user) {
    let self = this;
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
    }).then(function (confirm) {      
        if (confirm) {          
            self.UserListFactory.userRemove(user.email, (err) => {
            if (err) {
              const errorMsg = `Unable to remove user: ${err}`;
              Materialize.toast(errorMsg, 3500);
            } else {
              swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              self.listAll();
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

  userFilter(email) {
    if (typeof email === 'undefined' || email === ''){
      this.listAll();
    }else{
      this.UserListFactory.userFilter(email, (err, data) =>{
        if (err){
          const errorMsg = `Could not fetch user: ${err}`;
          Materialize.toast(errorMsg, 3500);
        } else {
          if (data.data.data === null){
            this.userList = {};
            this.lengthListUser = 0;
          }else{
            this.userList = data.data;
          }          
          this.userListService.set(data);  
        }
      });
    } 
  }
}

export default UserListController;
