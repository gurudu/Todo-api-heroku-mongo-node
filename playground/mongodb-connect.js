const MongoClient = require('mongodb').MongoClient;
const express = require('express');

var datab;
// url can be Amazon web services url or Heroku URL in production
const url = 'mongodb://Hari615:Hari_416@ds129593.mlab.com:29593/todo';
MongoClient.connect(url,(err,db) => {
  datab = db;
	if(err){
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('connected successfully to MongoDB server');

    db.collection('todo').insertOne( {

    	text:'Something to do',
        completed:false
    },(err, result) => {
        if(err){
           return console.log('Unable to insert into document into Todo collection',err);
        }
      console.log(result.ops[0]._id.getTimestamp());
    });

 app.listen(3000,() => {
	   console.log(`server listening to the port 3000`);
  });
 db.close();
});
