var mysql=require('mysql');
const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:'db1'
});
module.exports=conn;