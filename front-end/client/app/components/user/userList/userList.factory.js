let UserListFactory = function($http) {
    let usuarios = {};

    usuarios = {
        listUsers: function(callback) {
            console.log('Log Factory listUsers');
                $http({
                    method: 'GET',
                    url: 'http://localhost:5000/api/manager/users',
                }).then(function success(data) {
                    callback(data.data.data);
                },function error(err) {
                    console.log('Erro: ', err);     
                });            
        },   

        userRemove: function(email, callback) {
            console.log('Removendo Usuario: ', email);
            $http({
                method: 'DELETE',
                url: 'http://localhost:5000/api/manager/users/' + email,
            }).then(function success(data) {
                 callback(null, data);
                console.log(data);
            },function error(err) {
                let msg = 'Erro ao remover usuario: ' + err;
                callback(msg);    
            });            
        }
    }

    return usuarios;
};

export default UserListFactory;
