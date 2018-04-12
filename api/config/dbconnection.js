var mysql=require('mysql');
const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:'gothenballdb'
});
module.exports=conn;
