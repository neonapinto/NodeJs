const http = require('http');
const fs = require('fs');

http.createServer(function(request,response)
{
	try
	{
	let file = fs.readFileSync('.'+request['url']+'.txt','utf8');
	response.write(file);
	}
	catch(err)
	{
		if(err)
		{
			response.write("404:file not found");
		}
	}
	response.end();
}).listen(3000);

