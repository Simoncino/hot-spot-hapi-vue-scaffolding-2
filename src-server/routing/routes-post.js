module.exports = [
{
	method: 'GET',
	path: '/api/postStreaming',
	handler: function (request, reply) {
		const lista = require('./json_fake/ruotaDelTempo.json');
		let result = {
			success: false,
			message: 'Errore nel caricamento della lista',
			lista: []
		};
		if(lista){
			result = {
				success: true,
				message: '',
				lista: lista
			};
		} 
		reply(result);
	}
}
,{
	method: 'GET',
	path: '/api/spot/{spotid}/posts',
	handler: function (request, reply) {
		let lista = require('./json_fake/posts.json');

		for(let i in lista){
			let data = new Date((new Date(2017, 0, 1)).getTime() + Math.random() * ((new Date()).getTime() - (new Date(2000, 0, 1)).getTime()));
			lista[i].timestamp = data.getTime();
			lista[i].livelloOnda = Math.floor((Math.random() * 4) + 1);
			if(!lista[i].photo) lista[i].photo = {};
			lista[i].photo.id = Math.floor((Math.random() * 6) + 1);
		}

		const result = {
			success: true,
			message: '',
			lista: lista
		};
		reply(result);
	}
}
];
