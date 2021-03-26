var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + "/public"));

app.use(function (req, res, next) {
    // Do something
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string);
    // Call the next function in line:
    next();
  });

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });



app.get("/json", function(req, res) {
    if(process.env.MESSAGE_STYLE === uppercase){
        res.json({"message": "HELLO JSON"});
    }else{
        res.json({"message": "Hello json"});
    }
  });

  app.get("/now", 
  function(req, res, next){
      req.time = new Date().toString();
        next();
  },function(req,res){
      res.send({
          time: req.time
      });
    }
  );

 /* const middleware = (req, res, next) => {
    req.time = new Date().toString();
    next();
  };
  
  app.get("/now", middleware, (req, res) => {
    res.send({
      time: req.time
    });
  });*/
  





























 module.exports = app;
