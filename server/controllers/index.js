var models = require('../models');
var express = require('express');


module.exports = {
  messages: {
    get: function (req, res) {
    	models.messages.get(req.body, function(results) {
    		res.send(JSON.stringify(results));
    	});
    }, 
    post: function (req, res) { 
    	console.log('posting')
    	models.messages.post(req.body);
    	res.send(201);
  	}
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    	models.users.get(req.body, function(results) {
    		res.send(JSON.stringify(results));
    	});
    },
    post: function (req, res) {
    	models.users.post(req.body)
    	res.send(201);
    }
  }
};

