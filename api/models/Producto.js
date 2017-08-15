/**
 * Producto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
  	nombre:'STRING',
  	precio:'INTEGER',
  	unidades:'INTEGER',
  	descripcion:'STRING'
  }
};

//http://localhost:1337/Producto/create?nombre=cendekiapp&precio=200&unidades=12&descripcion=apekipapp
