let UserListService = function () {
	let listaUsuarios = {};

	let set = function(data){
			listaUsuarios = data;
	}

	let get = function(){
		return listaUsuarios;
	}

	return{ set, get };
};

export default UserListService;