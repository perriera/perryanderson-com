// const express = require('express');
// const app = new express();

// app.get('/', function(request, response){
//     response.sendFile('/home/perry/projects/perryanderson-com/dist/perryanderson-com/index.html');
// });

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/dist/perryanderson-com/'));

app.listen(3000);

