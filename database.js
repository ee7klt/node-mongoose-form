var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

mongoose.connect('mongodb://localhost/node-data');
