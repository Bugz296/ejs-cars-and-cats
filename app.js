// get the http module:
var http = require('http');

// fs module allows us to read and write content for responses!!
var fs = require('fs');

// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");

// invoke express and store the result in the variable app
var app = express();

app.use(express.static(__dirname));
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

/***************************
* ROUTES
****************************/ 
app.get('/assignments/ecac/', function(request, response){
    // Just wanted to try creating an array to put image names
    response.render('index');
});

app.get('/assignments/ecac/cars', function(request, response){
    // Just wanted to try creating an array to put image names and pass it through the render page
    var images = ['car1.jpg', 'car2.jpg', 'car3.jpg', 'car4.jpg', 'car5.jpg'];
    response.render('cars', {cars: images});
});

app.get('/assignments/ecac/cats', function(request, response){
    // Just wanted to try creating an array to put image names and pass it through the render page
    var images = ['cat1.jpg', 'cat2.jpg', 'cat3.jpg', 'cat4.jpg', 'cat5.jpg'];
    response.render('cats', {cats: images});
});

app.get('/assignments/ecac/form', function(request, response){
    response.render('form');
});
// tell the express app to listen on port 3002, always put this at the end of your server.js file
app.listen(3002, function() {
    console.log("listening on port 3002");
})