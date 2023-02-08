const express = require('express');
const bodyParser = require('body-parser')
const app = express();

appp.use('vew engine', "ejs");
app.get('/', function(req, res){
    
var today = new Date();
if(today.getDay() === 6 || today.getDay() === 0  ){
    res.send(" yea it's the weekend!")
} else {
    res.send('I HAVE TO WORTK')
}
})



app.listen(3000, function(){
    console.log('Server started on port 3000')
})