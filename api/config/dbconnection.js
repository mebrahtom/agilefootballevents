var mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:'db1'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;
