var express = require('express')
var router = express.Router()
var db = require('../config/dbconnection')
var mysql = require('mysql')
var bodyParser=require('body-parser')
var bcrypt=require('bcrypt')
var session=require('express-session')
router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())
router.use(session({secret:'group8'}))
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})
router.post('/register',function(req,res,next){
  const admin={
    firstname:req.body.fname,
    lastname:req.body.lname,
    email:req.body.email,
    password:bcrypt.hashSync(req.body.password,10)
  }
   db.query('INSERT INTO admins SET ?',admin,function(error,results,fields){
     if(error)
     throw error;
     res.end(JSON.stringify(results));
   });
 })
 router.post('/login',function(req,res,next){
  const email=req.body.email
  const password=req.body.password
  var validLogin=req.body.valid
  db.query('SELECT *FROM admins WHERE email=?', [email],function(error,results,fields){
    if(error){
      res.send('Error occured!');
    }
    else{
      if(results.length>0){
        for(const i in results){
          const validPassword=bcrypt.compareSync(password,results[i].password)
          var validLogin=false
          if(results[i].email===email && validPassword){
            validLogin=true;
            console.log("Logged in!");
            //set session
            //redirect to admin page
          }
        }
      }
    }
  })
  })
router.get('/countries',function(req, res, next) {
  db.query('SELECT * FROM Countries', function (err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

router.get('/countries/squad/:abr',function(req, res, next) {
  const abr = req.params.abr
  var sql = 'SELECT * FROM Players WHERE country = ' + mysql.escape(abr)
  db.query(sql, function (err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

router.get('/countries/player/:id',function(req, res, next) {
  const id = req.params.id
  var sql = 'SELECT * FROM Players WHERE id = ' + mysql.escape(id)
  db.query(sql, function (err, result, fields) {
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

router.get('/fixtures/playedMatches/:abr', function(req, res, next) {
  const abr = req.params.abr;
  var sql = 'SELECT * FROM MatchResults where team1 = ' + mysql.escape(abr) + 'OR team2 = ' + mysql.escape(abr);
  db.query(sql, function(err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

router.get('/fixtures/matchfixtures/:abr', function(req, res, next) {
  const abr = req.params.abr;
  var sql = 'SELECT * FROM MatchFixtures where team1 = ' + mysql.escape(abr) + ' OR team2 = ' + mysql.escape(abr);
  db.query(sql, function(err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})


router.get('/countries/info/:abr', function(req, res, next) {
  const abr = req.params.abr;
  var sql = 'SELECT * FROM CountryInformation where abbreviation = ' + mysql.escape(abr);
  db.query(sql, function(err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

/*

Maybe use later, nice format of groups.
router.get('/fixtures/groups1', function(req, res, next) {

var sql = "SELECT groupName, CONCAT('[',COALESCE(GROUP_CONCAT(CONCAT('{', 'team: ', team, '', '}') ORDER BY team ASC SEPARATOR ','),''),']') AS bData FROM HelperResultTable GROUP BY groupName";

//var sql = 'SELECT groupName, GROUP_CONCAT(CONCAT({team:\"\', team, \'\"})) list FROM HelperResultTable GROUP BY groupName;'
db.query(sql, function(err, result, fields) {
  if (err) throw err
  res.json(result)

})
*/
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

router.get('/fixtures/groupresults', function(req, res, next) {
  var sql = 'select * from FinalResultTableAll order by groupname, diff desc, points asc'
  db.query(sql, function(err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

module.exports = router
