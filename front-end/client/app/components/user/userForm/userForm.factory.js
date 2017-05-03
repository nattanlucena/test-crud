let UserFactory = function($http) {
    let usuario = {};

    usuario = {
        saveUser: function(user,callback) {
            console.log('Log Factory: ', user);
                $http({
                    method: 'POST',
                    url: 'http://localhost:5000/api/users/',
                    data: user
                }).then(function success(data) {
                    callback(data);
                },function error(err) {
                    console.log('Erro: ', err);     
                });            
        }
    }

    return usuario;
};

export default UserFactory;
