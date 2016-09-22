//reference the packages
var connect = require('connect');
var url = require('url');

//instantiate a new connect object
var app = connect();

//set up a hello function to handle the http request
var fallBack = function(req, res, next){
	res.end('Choose values in the url for a calculation...');
};

var calculateValues = function(req, res, next){
	//take values and place them in variables
	var qs = url.parse(req.url, true).query;
	var method = qs.method;
	var total = 0;
	var x = qs.x;
	var y = qs.y;
	//calculate the total and present it to the screen
	if(method == 'add'){
		total = parseInt(x) + parseInt(y);
		res.end(x + " + " + y + " = " + total);
	}
	if(method == 'subtract'){
		total = parseInt(x) - parseInt(y);
		res.end(x + " - " + y + " = " + total);
	}
	if(method == 'multiply'){
		total = parseInt(x) * parseInt(y);
		res.end(x + " * " + y + " = " + total);
	}
	if(method == 'divide'){
		total = parseInt(x) / parseInt(y);
		res.end(x + " / " + y + " = " + total);
	}
	//display an error to the screen and do nothing if the wrong input was provided for the method section
	else res.end('ERROR WRONG INPUT FOR METHOD');
};

//execute the appropriate function based on the http request
app.use('/lab3', calculateValues);
app.use(fallBack);//default page MUST GO LAST IN LIST HERE

//start the server on port 3000
app.listen(3000);