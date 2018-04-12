var mysql = require('mysql');
const pw = process.env.DB_PASSWORD
console.log("Password is", pw)

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'db1'
});

connection.connect(function(err) {
  if (err) throw err
  console.log("Connected!")
})

module.exports = connection
