var express = require('express'),
	p = require('path');

var app = express();

app.use(express.static('public'));

app.get('/first', function(req, res) {
	res.send('hello Owen!!!!');
});

var server = app.listen(3000, function() {

	console.log("listening on 3000");

});
