var mysql = require('mysql');


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "register"
});


connection.connect(function (err) {
  if (!err) {
    console.log("Database is connected ... nn");
  } else {
    console.log("Error connecting database ... nn" + err);
  }
});

module.exports = connection;

