


const express = require('express');

const app = express();

app.get('/', function(request, response){
           response.send('hello')
});

app.get('/contact', function(req, res){
    res.send('Contact me at: angela@gmail.com')
})
app.get('/about', function(req, res){
    res.send('Hi, iam Guilherme a teenager boy who has sexteen years old e is learning how to progaming softwares with angela')
})
app.get('/hobbies', function(req, res){
    res.send('I love writing code with angela')
})
app.listen(3000, function(){
    console.log('Server started on port 3000')
});
