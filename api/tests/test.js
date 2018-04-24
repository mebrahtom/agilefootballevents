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

test.serial.before(async () => {
  console.log('Setup start');
  await db.connect(function(err) {
    if (err) throw err
    console.log("Connected to test db")
  })
  console.log('Setup complete');
});

test('Get all countries', async (t) => {
  let countries
  console.log('Running test get countries')
  const asd = await db.query('SELECT * FROM Countries', function(err, result, fields){
    console.log('aslkdnalsknlkans')
    return {}
  })
  /*const connection = await db.getConnection()
  console.log(db)
  const string = await db.query('SELECT * FROM Countries')
  console.log(string)*/
  t.is(await asd, {})
})

test('bar', async t => {
	const bar = Promise.resolve('bar')

	t.is(await bar, 'bar')
})
