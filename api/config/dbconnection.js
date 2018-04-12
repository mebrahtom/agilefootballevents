var mysql = require('mysql');
const pw = process.env.DB_PASSWORD

mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'gothacupdb'
});

connection.connect(function(err) {
  if (err) throw err
  console.log("Connected!")
})

module.exports = connection
