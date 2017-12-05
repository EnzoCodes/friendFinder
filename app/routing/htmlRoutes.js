var express = require('express')
var app = express()
var path = require('path');

module.exports = function(app){

    //Home Page
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Display's survey page...I think
    app.get('/survey', function (req, res) {
       res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })

};
