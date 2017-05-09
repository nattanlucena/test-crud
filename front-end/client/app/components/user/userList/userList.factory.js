let UserListFactory = function ($http) {

  const API_BASE_PATH = 'http://localhost:5000/api/manager/users';

  return {

    listUsers: (callback) => {
      $http({
        method: 'GET',
        url: API_BASE_PATH,
      }).then(function success(data) {
        callback(null, data.data.data);
      }, function error(err) {
        callback(err);
      });
    },

    userRemove: (email, callback) => {
      $http({
        method: 'DELETE',
        url: API_BASE_PATH + email,
      }).then(function success(data) {
        callback(null, data);
      }, function error(err) {
        callback(err);
      });
    },

    userFilter: (email, callback) => {
      $http({
        method: 'GET',
        url: API_BASE_PATH + '/email/' + email,
      }).then(function success(data) {
        callback(null, data);
      }, function error(err) {
        callback(err);
      });
    }

  };

};

export default UserListFactory;
