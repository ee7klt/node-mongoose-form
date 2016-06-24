var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Profile = mongoose.model('profile');
var fs = require('fs');
var path = require('path');
var uid = require('uid2');

var TARGET_PATH = path.resolve(__dirname, '../writable/');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('elite');
});


router.post('/', function(req, res) {
  new Profile({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    eMail: req.body.eMail,
    essay: req.body.essay
  })
  .save(function(err, data) {
    console.log('profile data' + data);
  //  res.redirect('elite')
  })

  /* handle file upload */

  var is;
  var os;
  var targetPath;
  var targetName;
  var tempPath = req.files.resume.path;
  var extension = req.files.resume.path.split(/[. ]+/).pop();

  // new file name
  targetName = uid(22) + '.' + extension;
  // store in writable directory
  targetPath = path.join(TARGET_PATH, targetName);
  console.log('saving file to ' + targetPath);

  // read stream
  is = fs.createReadStream(tempPath);
  // write stream
  os = fs.createWriteStream(targetPath);

  is.pipe(os);
  //if we are done moving the file
  is.on('end', function() {

    //delete file from temp folder
    fs.unlink(tempPath, function(err) {
      if (err) {
        return res.send(500, 'Something went wrong');
      }

      console.log('done saving file');

    });//#end - unlink
  });//#end - on.end


});



module.exports = router;
