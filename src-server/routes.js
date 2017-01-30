
var baseR = require('./routing/routes-base');
var postR = require('./routing/routes-post');
var spotR = require('./routing/routes-spot');
var userR = require('./routing/routes-user');

module.exports = [].concat(baseR, postR, spotR, userR);


/*****DA UTILIZZARE IN SEGUITO START****/
/*
var cart = require('./cart');
var user = require('./user');

module.exports = [].concat(cart, user);
*/
/*****DA UTILIZZARE IN SEGUITO END******/