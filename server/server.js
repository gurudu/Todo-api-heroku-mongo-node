
const {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const {ObjectID} = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000 ;
//middleware for express
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	  var todo = new Todo({
		  text: req.body.text,
		  completed: true
	 });

	todo.save().then((doc) => {

	   res.send(doc);

	   },(e)=>{

	   res.status(400).send(e);
	});
});

app.get('/todos',(req,res)=>{
  Todo.find().then((doc)=>{
		res.send(doc);
	}),(e) =>{
		res.status(400).send(e);
	}

});

app.get('/todos/:id',(req,res) => {
   var id = req.params.id;
  if(!ObjectID.isValid(id)){
	 return res.status(404).send();
  }
 Todo.findById(id).then((doc)=>{

	if(!doc){
		return res.status(404).send();
	}
	res.send({doc});
	}).catch((e) =>{
		res.status(400).send();
	})
});
app.listen(port,() => {
 console.log(`server listening to the port ${port}`);
});



/*var newTodo = new Todo({

	text:'have you had your dinner?',
	completed: true
});

newTodo.save().then((doc) => {

console.log('saved todo',doc);

},(e)=>{

  console.log('Unable to save todo');
});



var user = new User({
   email:'  hari@co.in  '
});


user.save().then((doc)=>{
 console.log('saved user',doc);

},(e)=>{
   console.log('Unable to save user');
})

*/
