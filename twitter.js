var twitter = require('ntwitter');
var credentials = require('./credentials.js');
var redis = require('redis');

var client = redis.createClient();


//create the awesome key if it doesn't exist//


//sets up twitter stream//

var t = new twitter({
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token_key: credentials.access_token_key,
    access_token_secret: credentials.access_token_secret
});

t.stream(
    'statuses/filter',
    { track: ['cake', 'Love', 'eclair', 'cookie', 'icecream', 'chocolate', 'candy'] },
    function(stream) {
        stream.on('data', function(tweet) {
            console.log(tweet.text);
        

	if(tweet.text.match('Cake'&'Love')) {
		client.incr('acake');
}

	if(tweet.text.match('eclair'&'Love')) {
		client.incr('beclair');
} 

	if(tweet.text.match('cookie'&'love')) {
		client.incr('ccookie');
}

	if(tweet.text.match('ice cream'&'love')) {
		client.incr('dicecream');
}

	if(tweet.text.match('chocolate'&'love')) {
		client.incr('echocolate');
}

	if(tweet.text.match('candy'&'love')) {
		client.incr('fcandy');
}


    }
);
});
