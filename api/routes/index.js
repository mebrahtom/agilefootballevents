var express = require('express')
var router = express.Router()
var db = require('../config/dbconnection')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/checkconnection',function(req,res){

})

module.exports = router
