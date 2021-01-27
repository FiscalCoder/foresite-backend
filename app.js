const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");
const request = require ("request");
app.use(bodyParser.urlencoded({extended:true}));

// getting routes from router folder
var registerRouter = require("./routes/registerRouter");

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.use('/register', registerRouter);




  // app.get("/getdata",function(req,res){
  //   res.json({
  //     "statusCode":200,
  //     "statusMessage":"success"
  //   })
  // })

app.listen(3000, function(){
    console.log("server started");
  });