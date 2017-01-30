
module.exports = [
{ 
	method: 'GET', 
	path: '/spot', 
	handler: function (request, reply) {
		reply.file('index.html');
	} 
}
,{
	method: 'GET',
	path: '/api/spots',
	handler: function (request, reply) {
		const lista = require('./json_fake/spots.json');

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
	path: '/api/post/{postid}/photos',
	handler: function (request, reply) {
		const lista = require('./json_fake/photos.json');

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
	path: '/api/post/{postid}/photos/{photoid}',
	handler:  function (request, reply) {
		const lista = require('./json_fake/photos.json');

		const id = request.params.photoid;
		const photos =  lista.filter(function(item){
			return item.id == id;
		});  

		let item = {};
		if(photos && photos.length){
			item = photos[0];
		}
		const result = {
			success: true,
			message: '',
			item: item
		};
		reply(result);
	}
}

,{
	method: 'GET',
	path: '/api/post/{postid}/photosImg/{photoid}',
	handler: function (request, reply) {
		const lista = require('./json_fake/photos.json');

		const id = request.params.photoid;
		const photos =  lista.filter(function(item){
			return item.id == id;
		});  

		let item = {};
		if(photos && photos.length){
			item = photos[0];
		}
		reply.file('./img/' + item.link);
	}
}

];

