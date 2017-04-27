let UserFormFactory = function ($http) {
  const user = {};

  let addUser = (data = {}, callback) => {
    return $http({
      method: 'POST',
      url: 'http://localhost:5000/api/users/',
			data: data
    })
    .then(function successCallback(response) {
				callback(response);
      }, function errorCallback(response) {
        console.log(response);
      });
  };

  return { addUser };
};

export default UserFormFactory;
