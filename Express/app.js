const express = require('express');
const app = express();
const mustache = require('mustache-express');
const bodyParser = require('body-parser');

app.use("/",express.static(__dirname + '/public'));

app.engine('html',mustache());
app.set('view engine','html');
app.set('views',__dirname + '/views');

app.use(bodyParser.urlencoded({
	extended:true
}));
app.use(bodyParser.json());

app.get("/",function(req,res)
{
	res.render("index");
});



app.listen(3000,function(error){
if(error == true)
{
	console.log("Some error Occurred");

}
else
{
	console.log("Listening on localhost:3000");
}
});