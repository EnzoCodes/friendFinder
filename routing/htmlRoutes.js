var express = require('express')
var app = express()

//Home Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Display's survey page...I think
app.get('/survey', function (req, res) {
   res.sendFile(path.join(__dirname, "survey.html"));
});
