import mysql from 'mysql'
import test from 'ava'
require('dotenv').config()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'gothencupdb_test'
})

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
})

// Assert that there allways are the given amount of teams in the database
test.cb('Get all countries', t => {
  db.query('SELECT * FROM Countries', function (err, result, fields) {
    if (err) throw err
    t.is(result.length, 32)
    t.end()
  })
})

// Assert that there allways are 8 groups with the name A to H
test.cb('Test groups are consistent', t => {
  db.query('SELECT * FROM Groups', function (err, result, fields) {
    if (err) throw err
    const groups = []
    for (let i = 0; i < result.length; i++) {
      groups[i] = result[i].groupName
    }
    t.deepEqual(groups, ['A','B','C','D','E','F','G','H'])
    t.end()
  })
})
