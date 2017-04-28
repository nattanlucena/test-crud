let UserFormFactory = function ($http) {

  let addUser = (data = {}, callback) => {
    return $http({
      method: 'POST',
      url: 'http://localhost:5000/api/users/',
			data
    })
    .then(function successCallback(res) {
				callback(res);
      }, function errorCallback(res) {
        Materialize.toast('Error! Try again later!', 3500)
        console.log(res)
      });
  };

  return { addUser };
};

export default UserFormFactory;
