var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (req, callback) {
    	db.dbConnection.query('SELECT * FROM messages', function(err, results) {
    		if (err) {throw err}

			callback(results);
    	})
    }, // a function which produces all the messages
    post: function (message) { 
    	var post = {
    		username: message.username,
    		message: message.message,
    		roomname: message.roomname
    	}
    	db.dbConnection.query('INSERT INTO messages SET ?', post, function(err, result) {
    		if (err) {throw err}
    		console.log(result)
    	})
	} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, callback) {
    	console.log('getting from models');
    	db.dbConnection.query('SELECT * FROM user', function(err, results) {
    		if (err) {throw err}
			callback(results);
    	})
    },
    post: function (message) {
    	var post = {
    		username: message.username
    	}
    	db.dbConnection.query('INSERT INTO users SET ?', post, function(err, result) {
    		if (err) {throw err}
    		console.log(result);
    	})
    }
  }
};

