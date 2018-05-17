var express = require('express')
var router = express.Router()
var db = require('../config/dbconnection')
var mysql = require('mysql')
var bodyParser=require('body-parser')
var bcrypt=require('bcrypt')
var jwt=require('jsonwebtoken')
router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())
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
   })
})

router.post('/login',function(req,res,next){
  const email=req.body.email
  const password=req.body.password
  let validLogin=false;
  let sql = 'SELECT * FROM admins WHERE email = ' + mysql.escape(email)
  db.query(sql, function(error,results,fields){
    if(error){
      res.send('Error occured!');
    }
    if(results.length>0){
      for(const i in results){
        const validPassword=bcrypt.compareSync(password,results[i].password)
        if(results[i].email===email && validPassword){
          const token=jwt.sign({email},'secretekey');
          validLogin=true;
          res.json({token:token,validLogin:validLogin})
        } else {
          res.json({validLogin:validLogin})
        }
      }
    }
  })
})

  router.post('/save_results',function(req,res,next){
    const MatchResult={
      matchNumber:req.body.matchNumber,
      team1:req.body.team1,
      goals1:req.body.goals1,
      team2:req.body.team2,
      goals2:req.body.goals2,
      groupName:req.body.groupName

    }
    db.query('INSERT INTO MatchResults SET ?',MatchResult,function(error,results,fields){
      if(error)
      {
      throw error;
    }
      {
      res.end(JSON.stringify(results));
    }
    })
  })

router.post('/update_results',function(req,res,next){
      const  matchNumber= req.body.matchNumber
      const team1=req.body.team1
      const goals1=req.body.goals1
      const team2=req.body.team2
      const goals2=req.body.goals2
      const  groupName=req.body.groupName
    var sql ='UPDATE MatchResults SET goals1='+ mysql.escape(goals1)+', goals2='+ mysql.escape(goals1)+
    ', team1='+ mysql.escape(team1)+
    ', team2='+ mysql.escape(team2)+
    ', groupName='+ mysql.escape(groupName)+
    'WHERE matchNumber='+mysql.escape(matchNumber);
    db.query(sql,function(error,results,fields){
      if(error)
      throw error;
      res.end(JSON.stringify(results));
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
  var sql = 'SELECT * FROM LatestMatchResults'
  db.query(sql, function(err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

router.get('/fixtures/playedMatches/:abr', function(req, res, next) {
  const abr = req.params.abr;
  var sql = 'SELECT * FROM LatestMatchResults where team1 = ' + mysql.escape(abr) + 'OR team2 = ' + mysql.escape(abr);

  db.query(sql, function(err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

router.get('/fixtures/matchfixtures/:abr', function(req, res, next) {
  const abr = req.params.abr;
  var sql = 'SELECT * FROM MatchUpcomings where team1 = ' + mysql.escape(abr) + ' OR team2 = ' + mysql.escape(abr);

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
  var sql = 'SELECT * FROM MatchUpcomings'
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
  var sql = 'select * from FinalResultTable'
  db.query(sql, function(err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

router.get('/fixtures/teamstats', function(req, res, next) {
  var sql = 'SELECT * FROM TeamGoals'
  db.query(sql, function(err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

router.get('/fixtures/playerstats', function(req, res, next) {
  var sql = 'SELECT * FROM PlayerGoals'
  db.query(sql, function(err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

router.get('/locations', function(req, res, next) {
  //const id = req.params.id
  const type = req.params.type
  var sql = 'SELECT * FROM Locations'
  db.query(sql, function(err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

router.get('/tablesize/:type', function(req, res, next) {
  const type = req.params.type
  var sql = 'SELECT COUNT(id) as COUNT FROM ' + type
  db.query(sql, function(err, result, fields) {
    if (err) throw err
    res.json(result)
  })
})

module.exports = router
