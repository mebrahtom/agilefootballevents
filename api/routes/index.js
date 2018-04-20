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

router.get('/fixtures/groups1', function(req, res, next) {

  var sql = "SELECT groupName, CONCAT('[',COALESCE(GROUP_CONCAT(CONCAT('{', 'team: ', team, '', '}') ORDER BY team ASC SEPARATOR ','),''),']') AS bData FROM HelperResultTable GROUP BY groupName";

  //var sql = 'SELECT groupName, GROUP_CONCAT(CONCAT({team:\"\', team, \'\"})) list FROM HelperResultTable GROUP BY groupName;'
  db.query(sql, function(err, result, fields) {
    if (err) throw err
    res.json(result)

  })

})

module.exports = router
