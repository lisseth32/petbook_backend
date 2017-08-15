/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.user.attributes({
    
    /* e.g.
    nickname: 'string'
    */	
            name: {
              type: 'string',
              required: true
            },
            mascota: {
              type: 'string',
              required: true
            },
            genero: {
              type: 'string',
              required: true
            },
             email: {
	       type: 'string',
	       email: true,
	       required: true,
	       unique: true
	    },
    	    profile: {
    	    	model: 'profile'
    	    }
  }),
  
  beforeCreate: require('waterlock').models.user.beforeCreate,
  beforeUpdate: require('waterlock').models.user.beforeUpdate
};


//http://localhost:1337/User/create?email=lissethramirez876@gmail.com&password=1845623318456233&confirmPassword=1845623318456233&name=Lisseth+Ramirez&mascota=Kaysser&genero=Macho

//http://localhost:1337/Auth/login?email=lissethramirez876@gmail.com&password=1845623318456233&confirmPassword=1845623318456233&name=Lisseth+Ramirez&mascota=Kaysser&genero=Macho

