var express =  require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
//const cors=require("cors");
var db = require("./model/db");
var router1= require("./router/cities");
var router2= require("./router/neighbourhood");
var router3= require("./router/geometry");
var router4= require("./router/view1");
var router5= require("./router/view2");
var router6= require("./router/view3");
var router7= require("./router/view4");
var app = express();

mongoose.Promise=global.Promise;
const mongo=mongoose.connect('mongodb://localhost:27017/urbanNeighbourhood',{ useNewUrlParser: true }
,(err,res)=>{
if(err) throw err;
console.log("Connected to database");
});

console.log("Node is running");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(cors());
//anothe wau of doing cross origin resource sharing
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,OPTIONS");
    next();
})
app.use("/",router1); 
app.use("/",router2);
app.use("/",router3);
app.use("/",router4); 
app.use("/",router5);
app.use("/",router6); 
app.use("/",router7);

/*app.listen(3000,function(){
    console.log("Listning on 3000");
});*/

module.exports=app;