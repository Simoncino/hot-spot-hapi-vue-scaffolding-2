
module.exports = [
{
	method: 'POST',
	path: '/api/login',
	handler: function (request, reply) {
		const userReq = request.payload;
		console.log('userReq',userReq);
		
		let result = {
			success: false,
			message: 'NON sei loggato COJONE!!!!!!'
		};

		const users = require('./json_fake/userList.json');
		let user = null;

		user = users.find(function(item){
			return userReq.username == item.username && userReq.password == item.password;
		});

		console.log('trovato', user);

		if(user){
			user.random = Math.floor((Math.random() * 10) + 1);
			result.success = true;
			result.message = 'Loggato correttamente dio FROCIO';
			result.user = user;
		}	

		reply(result);
	} 
}

,{
	method: 'GET',
	path: '/api/simpleList',
	handler: function (request, reply) {
		const lista = require('./json_fake/ruotaDelTempo.json');
		const result = {
			success: true,
			message: '',
			lista: lista
		};
		reply(result);
	}
}
,{
	method: 'GET',
	path: '/api/usersList',
	handler: function (request, reply) {
		let lista = require('./json_fake/userList.json');

		for(let i in lista){
			lista[i].random = Math.floor((Math.random() * 10) + 1);
		}

		const result = {
			success: true,
			message: '',
			lista: lista
		};
		reply(result);
	}
}
,{
	method: 'GET',
	path: '/api/user/{userid}',
	handler: function (request, reply) {
		const lista = require('./json_fake/userList.json');

		const id = request.params.userid;

		let user =  lista.find(function(item){
			return item.id == id;
		});  

		const result = {
			success: true,
			message: '',
			item: user
		};
		reply(result);
	}
}


];