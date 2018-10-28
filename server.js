var cors = require('cors');
var request= require('request');
var express = require('express');

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(cors());
app.get('/', function(req, res) {
	res.render('index');
})

app.get('/getData', function (req, res) {
    var searchKeyword = req.query.searchkey;
    request("https://kgsearch.googleapis.com/v1/entities:search?query="+searchKeyword+"&key=AIzaSyCZbMz2VUDfsNIawl7W9W64FpZp8gsoh10&limit=1&indent=True", function (error, response, body) {
        res.send(body);
    });



});

app.listen(port, function() {
	console.log('app running')
})

