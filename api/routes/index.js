var express = require('express')
var router = express.Router()
var db = require('../config/dbconnection')
var mysql = require('mysql')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/countries',function(req, res, next) {
  db.query('SELECT * FROM Countries', function (err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

router.get('/countries/group/:groupId', function(req, res, next) {
  const groupId = req.params.groupId
  var sql = 'SELECT * FROM Countries WHERE groupName = ' + mysql.escape(groupId)
  db.query(sql, function(err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

router.get('/fixtures/playedMatches', function(req, res, next) {
  var sql = 'SELECT * FROM MatchResults'
  db.query(sql, function(err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

router.get('/fixtures/matchfixtures', function(req, res, next) {
  var sql = 'SELECT * FROM MatchFixtures'
  db.query(sql, function(err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

router.get('/fixtures/groups', function(req, res, next) {
  var sql = 'SELECT * FROM Groups'
  db.query(sql, function(err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

module.exports = router
