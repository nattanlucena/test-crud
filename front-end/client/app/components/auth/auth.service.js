let AuthService = function ($http) {

  let register = (data = {}, callback) => {
    return $http({
      method: 'POST',
      url: 'http://localhost:5000/api/manager/users/',
			data
    })
    .then(function successCallback(res) {
				callback(null, res);
      }, function errorCallback(err) {
        callback(err);
      });
  };

  return { register };
};

export default AuthService;
