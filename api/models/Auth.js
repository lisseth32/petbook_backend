/**
 * Auth
 *
 * @module      :: Model
 * @description :: Holds all authentication methods for a User
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.auth.attributes({
    
    /* e.g.
    nickname: 'string'
    */ 
  }),
  
  beforeCreate: require('waterlock').models.auth.beforeCreate,
  beforeUpdate: require('waterlock').models.auth.beforeUpdate
};

//http://localhost:1337/User/create?name=Lisseth+Ramirez&email=lissethramirez876@gmail.com&password=123&mascota=Kaysser&genero=Macho
//




//http://localhost:1337/Auth/login?email=lissethramirez876@gmail.com&password=12345678

//http://localhost:1337/Auth/login?email=lissethramirez876@gmail.com&password=12345678name=Lisseth+Ramirez&mascota=Kaysser&genero=Macho

//http://localhost:1337/Auth/login?email=lissethramirez876@gmail.com&password=1845623318456233&confirmPassword=1845623318456233&name=Lisseth&mascota=Kaysser&genero=Macho
