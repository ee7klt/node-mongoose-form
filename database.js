var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//var mongodbUri = 'mongodb://heroku_8g805ms9:92i88feoselvketcs2fsjk4hb3@ds023664.mlab.com:23664/heroku_8g805ms9'
var mongodbUri = 'mongodb://test:test@ds023654.mlab.com:23654/elitemongoose';
mongoose.connect(mongodbUri);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('connected', function() {
  console.log('Mongoose connected to '+mongodbUri);
});




// db.once('on', function() { // wait for db to connect before starting app ??

  var Comment = new Schema({
    title: String,
  })

  var ProfileData = new Schema({
    firstName: String,
    lastName: String,
    eMail: String,
    phone: String,
    essay: String
  })


  mongoose.model('comments', Comment);
  mongoose.model('profile', ProfileData);

// })



// mongoose.connect('mongodb://localhost/node-data');
