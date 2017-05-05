let AuthService = function ($http) {

  const API_BASE_PATH = 'http://localhost:5000/api/manager/users/';

  let register = (data = {}, callback) => {
    console.log('aqui');
    return $http({
      method: 'POST',
      url: API_BASE_PATH,
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
