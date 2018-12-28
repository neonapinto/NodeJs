const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;
const url = 'mongodb://127.0.0.1:27017/Tutorials';

mongoClient.connect(url,function(error,db) {
	// body...
	if(error)
	{
		console.log(error)
	}
	else
	{
		console.log("db connected");
		let animals = db.collection('animals');
		animals.insert({name:'bunny',weight:'400lb'});
		animals.find().toArray(function(error,result){;
		console.log(JSON.stringify(result))
	});

	}
})