let UserFactory = function ($http) {

  const API_BASE_PATH = 'http://localhost:5000/api/manager/users';

  return {

    saveUser: (user, callback) => {
      $http({
        method: 'POST',
        url: API_BASE_PATH,
        data: user
      }).then(function success(data) {
        console.log('1');
        callback(null, data.data);
      }, function error(err) {
        console.log('Erro2:', err);
        callback(err);
      });
    }


  };

};

export default UserFactory;
