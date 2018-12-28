const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/'));

app.get("/",function(request,response){
	fs.readFile(__dirname + '/index.html',function(err,data){
		if(!err)
		{
			res.write(data);
		}
		res.end();
	})
});
app.post("/status/new",function(req,res)
{
	let status = JSON.stringify({
		"name":req['body']['name'],
		"status":req['body']['status']}
		);
	fs.writeFile(__dirname + "/posts.json",status,function(err)
	{
		if(err)
		{
		console.log(err);
	    }
	})
})


app.get("/status",function(req,res)
{
	fs.readFile(__dirname + "/posts.json",function(err,data)
	{
		if(!err)
		{
			res.send(JSON.parse(data))
		}
		else
		{
			console.log(err)
		}
	})
})

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