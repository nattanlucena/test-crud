let userListService = function () {
	// body... 
	let listaUsuarios = {};

		let set = function(data){
			 listaUsuarios = data;
		}

		let get = function(){
			return listaUsuarios;
		}
	
		return{
			set,
			get
		};

	// 	let set = (data) => {
	// 		 listaUsuarios = data;
	// 	}

	// 	let get = () =>{
	// 		return listaUsuarios;
	// 	}
	// return { set, get };
};

export default userListService;