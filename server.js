var http = require('http');
var redis = require('redis');

var client = redis.createClient();

http.createServer(function (req, res) {
	client.mget(['acake', 'beclair', 'ccookie', 'dicecream', 'echocolate', 'fcandy'], function(error,responses) {
		console.log(responses);


    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("people's favorite deserts" + '<br></br> cake: ' + responses[0] + '<br></br> eclair: ' + responses[1] + '<br></br> cookie: ' + responses[2] + '<br></br> icecream: ' + responses[3] + '<br></br> chocolate: ' + responses[4] + '<br></br> candy: ' + responses[5]);
	});
}).listen(3000);

console.log('Server running on port 3000');