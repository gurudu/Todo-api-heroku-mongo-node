var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Hari615:Hari_416@ds129593.mlab.com:29593/todo' || 'mongodb://localhost:27017/Todo123');
//mongodb://<dbuser>:<dbpassword>@ds129593.mlab.com:29593/todo
module.exports = {mongoose};
