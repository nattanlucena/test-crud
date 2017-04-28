let UserListFactory = function ($http) {
  const user = {};

  let getUsers = (callback) => {
    return $http({
      method: 'GET',
      url: 'http://localhost:5000/api/users/'
    })
    .then(function successCallback(response) {
				callback(response);
      }, function errorCallback(response) {
        console.log(response);
      });
  };

  return { getUsers };
};

export default UserListFactory;
