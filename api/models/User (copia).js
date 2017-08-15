/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name:'string',
  	email:'string',
  	password:'string',
  	mascota:'string',
  	genero:'string'
  }
};
//http://localhost:1337/User/create?name=Lisseth+Ramirez&email=lissethramirez876@gmail.com&password=123&mascota=Kaysser&genero=Macho


