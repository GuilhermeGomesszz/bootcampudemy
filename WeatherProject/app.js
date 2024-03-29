const express = require('express');

const https = require('https');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extented: true}));

app.get('/', function(req, resp){

    resp.sendFile(__dirname + '/index.html');
   
});

app.post('/', function(req, res){
    const query = req.body.cityName;
    const apiKey = "99edfd50d26989efb1bf841436e2e7f6";
    const units = 'metric'
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query +"&appid="  + apiKey +"&units=" + units;

    
    https.get(url, function(response){
        console.log(response);
    
        response.on("data", function(data){
            console.log(data)
            const weatherData = JSON.parse(data)
            console.log(weatherData)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "https://openweathermap.org/img/wn" + icon + '@2x.png'
            console.log(weatherDescription)
            res.write('<h1>The temperature in ' + query +   'is '  + temp + 'degrees celcius </h1>');
            res.write('<img src = '+ imageURL + '>')
            res.send() 
     
        })
    })
     
    
})

app.listen(3000, function(){
    console.log('Server is running on port 3000');
})