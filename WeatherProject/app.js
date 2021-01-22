// jshint esversion:6
const express = require("express");
const https = require("https");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});
app.post("/", (req, res)=>{
    const query = req.body.cityName;
    const apiKey = "873f8e069d6be3e882d908d757aa10fc";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + 
    query + 
    "&appid=" + apiKey + 
    "&units=" + unit;
    https.get(url,(response)=>{
        console.log(response.statusCode);
        response.on('data',(data)=>{
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius.</h1>");
            res.write("<h1>The weather is currently " + weatherDescription + ".</h1>");
            const weatherIconUrl = "https://openweathermap.org/img/wn/" + weatherData.weather[0].icon +"@2x.png";
            res.write("<img src=" + weatherIconUrl + " alt='weather icon'>");
            res.send();
        });
    });
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});