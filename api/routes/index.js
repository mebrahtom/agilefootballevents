var express = require('express');
var router = express.Router();
var conn=require('../config/dbconnection');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/checkconnection',function(req,res){
    conn.connect((err)=>{
        if(err) throw err;
        res.send("Connected!");
    });
});

module.exports = router;
