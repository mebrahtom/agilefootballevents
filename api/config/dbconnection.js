var mysql = require('mysql');
const pw = process.env.DB_PASSWORD

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tsige_mit01',
    database: 'gothencupdb'
});

connection.connect(function(err) {
  if (err) throw err
  console.log("Connected!")
})

module.exports = connection
