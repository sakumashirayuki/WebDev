// jshint esversion:6

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// route /
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});
app.post('/', function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});
// route /bmicalculator
app.get('/bmicalculator', function(req, res){
    res.sendFile(path.join(__dirname, "bmiCalculator.html"));
});
app.post('/bmicalculator', function(req, res){
    var weight = req.body.weight;
    var height = req.body.height;
    var result = weight / (height * height);

    res.send("Your BMI is " + result);
});

app.listen(3000, function(){
    console.log("Server stated on port 3000");
});
