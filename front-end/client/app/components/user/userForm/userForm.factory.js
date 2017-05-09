let UserFactory = function ($http) {

  const API_BASE_PATH = 'http://localhost:5000/api/manager/users';

  return {

    saveUser: (user, callback) => {
      console.log(user);
      $http({
        method: 'POST',
        url: API_BASE_PATH,
        data: user
      }).then(function success(data) {
        callback(null, data);
      }, function error(err) {
        callback(err);
      });
    }


  };

};

export default UserFactory;
