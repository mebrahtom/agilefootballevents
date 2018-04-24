import mysql from 'mysql'
import test from 'ava'
require('dotenv').config()
//mysql.Promise = global.Promise

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'gothencupdb_test'
})
/*var db  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : process.env.DB_PASSWORD,
  database        : 'gothencupdb_test'
});*/



/*test.before(t => {
  db.connect(function(err) {
    if (err) throw err
    console.log("Connected to test db")
  })
})*/

test.before.cb(t => {
  try{
    db.connect(function(err) {
      if (err) throw err
      console.log('connected to testDB')
      t.end()
    })
  } catch (e) {
    throw e
  }
});

test.cb('Get all countries', t => {
  let countries
  console.log('Running test get countries')
  t.plan(1)
  db.query('SELECT * FROM Countries', function (err, result, fields) {
    console.log()
    if (err) throw err
    t.pass(true)
    t.end()
  })


  /*const connection = await db.getConnection()
  console.log(db)
  const string = await db.query('SELECT * FROM Countries')*/
  //console.log(asd)

})

test('bar', async t => {
	const bar = Promise.resolve('bar')

	t.is(await bar, 'bar')
})
