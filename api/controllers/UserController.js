/**
 * UserController.js 
 * 
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *                 
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').actions.user({
  /* e.g.
    action: function(req, res){
  
    }
  */
  	restricted:function(req,res){
		return res.ok("If You can see this you are authenticated");
	},	
	open:function(req,res){
		return res.ok("This is open to all!!!");
	},
	create: function(req, res){
		var params = req.params.all(),
	    		auth = {
	    			email: params.email,
	    			password: params.password
	    		},
	    		userObj = {
		        	name: params.name,
		        	mascota: params.mascota,
		        	genero: params.genero,
		        	email: params.email,
		        	profile:{
		        		phone: '+58271 244 4854',
		        		image: './assets/images/upload/default-profile.png',
		        		imageP: './assets/images/upload/default-portada.png',
		        		webPage: 'www.mipaginapersonal.com',
		        		address: 'Mi direccion default desde sails'
		        	}
		    	};
	    	User.create(userObj).exec(function (err, user) {
	    		
	    		if (err) {
	    			sails.log.error("USER: " + err);
	    			req.session.flash = {
	    				err: err
	    			};
	    			return res.json(err);
	    		} else {
	    			req.session.user = user;
	    			waterlock.engine.attachAuthToUser(auth, user, function (err) {
	    				if (err) {
	    					sails.log.error("AUTH: " + err);
	    					return res.json(err);
	    				} else {
	    					req.session.authenticated = true;
	    					console.log('create en sails '+user);
	    					return res.json({ok: true, user:user});
	    				}
	    			});
	    		}
	    	});
    	},
    	userByEmail:function(req, res){
    		var params = req.params.all(),
	    		email= params.email;
    		User.findOne({
    			email:email
    		}).exec(function (err, em){
    			if (err) {
    				return res.serverError(err);
    			}
    			if (!em) {
    				return res.notFound('Email no encontrado.');
    			}
    			return res.json(em);
    		});
    	}
});




