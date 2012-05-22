
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var sp = new SerialPort("/dev/tty.usbmodem641", { 
    parser: serialport.parsers.readline("\n") 
  });

sp.on("data", function (data) {
	console.log(">> "+data);
});

write = function(n){
	console.log('<<' + n + '!!')
	sp.write(n + '!!');
};



var express = require('express'),
    app = express.createServer();
    app.use(express.bodyParser());
 
app.configure(function () {
	app.use(express.static(__dirname + '/public'));
	app.use(express.bodyParser());
});

var reset = 28113973;
var mapWhat = {
	'broke the build':17,
	'needs coffee':19,
	'needs beer':21
};
var mapWho = [15,13,11,9,7,5,3,1];

app.post('/', function(req, res){
	write(reset);
	write(mapWhat[req.body.what]);
	write(mapWho[req.body.who]);
	res.redirect('/');
});

app.post('/reset', function(req,res){
	write(reset);
	res.redirect('/')
})



var people = "WhiteOctober benjaminbenben johnwards mightjustwork peterjwest ptrmcc rich_81 skinofstars".split(' ');

app.get('/people', function(req, res){
	res.send(people);
});


app.listen(3000);