
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var sp = new SerialPort("/dev/tty.usbmodem621", { 
    parser: serialport.parsers.readline("\n") 
  });

sp.on("data", function (data) {
	console.log("here: "+data);
});

setTimeout(function(){
	sp.write("111!!");
	sp.write("431!!!");
	sp.write("23445!!!!");
}, 1500);
