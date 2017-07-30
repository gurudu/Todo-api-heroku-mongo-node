const MongoClient = require('mongodb').MongoClient;

// url can be Amazon web services url or Heroku URL in production
const url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,(err,db) => {

	if(err){
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('connected successfully to MongoDB server');

    db.collection('Todo').insertOne({

    	text:'Something to do',
        completed:false
    },(err, result)=>{
        if(err){
        	return console.log('Unable to insert into document into Todo collection',err);
        }
      console.log(result.ops[0]._id.getTimestamp());
    });
    
	db.close();
});