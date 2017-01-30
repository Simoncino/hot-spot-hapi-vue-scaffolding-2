const basedir = '../dist';

module.exports = [
{ 
	method: 'GET', 
	path: '/', 
	handler: function (request, reply) {
		reply.file('index.html');
	} 
}
,{ 
	method: 'GET', 
	path: '/home', 
	handler: function (request, reply) {
		reply.file('index.html');
	} 
}
,{ 
	method: 'GET', 
	path: '/try', 
	handler: function (request, reply) {
		const result = {
			"success":true
			,"status":"A cannone!"
		};
		reply(result);
	} 
}
,{ 
	method: 'GET', 
	path: '/js/build.js', 
	handler: function (request, reply) {
		reply.file('js/build.js');
	} 
}
,{ 
	method: 'GET', 
	path: '/{x}/{y}', 
	handler: function (request, reply) {
		console.log("path", request.params.x)
		console.log("name", request.params.y)
		reply.file(request.params.x + "/" + request.params.y);
	} 
}

,{ 
	method: 'GET', 
	path: '/css/{name}', 
	handler: function (request, reply) {
		reply.file(basedir + "/css/" + request.params.name);
	} 
}
,{ 
	method: 'GET', 
	path: '/test/{name?}', 
	handler: function (request, reply) {
		if(request.params.name){
			reply({success:true, msg : request.params.name})
		} else {
			reply({success:true, msg : "A CANNONE!!!"})
		}
	} 
}
,{
	method: 'GET',
	path: '/api/call',
	handler: function (request, reply) {
		reply({
			message: 'Hello!',
			cose: 'Le cose che proprio sono molto belle queste cose di /api/call!'
		})
	}
}



];
