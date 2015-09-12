var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports.dbConnection = mysql.createConnection({
	user: "root",
  	password: "",
  	database: "chat"
});

module.exports.dbConnection.connect(function(err) {
	if (err) {
		console.log(err)
		return;
	} else {
		console.log("connection established");
	}
});

// module.exports.dbConnection.end(function(err) {})