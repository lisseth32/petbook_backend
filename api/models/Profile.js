/**
 * Profile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	    phone:{
	      type:'string',
	    },
	    //Imagen de perfil del usuario
	    image:{
	      type:'string'
	    },
	    //Image de portada
	    imageP:{
	      type:'string'
	    },
	    webPage:{
	      type:'string'
	    },
	    address:{
	      type:'string'
	    }
	}
	    
};
//phone image imageP webPage address
