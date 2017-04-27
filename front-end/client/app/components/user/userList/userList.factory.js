let UserListFactory = function ($http) {
  const user = {};

  let getUsers = (callback) => {
    return $http({
      method: 'GET',
      url: 'http://localhost:5000/api/users/'
    })
    .then(function successCallback(response) {
				callback(response);
        return true;
      }, function errorCallback(response) {
        console.log(response);
      });
  };

  let isSignedIn = () => {
    return user.isSignedIn; 
  };

  return { getUsers, isSignedIn };
};

export default UserListFactory;
