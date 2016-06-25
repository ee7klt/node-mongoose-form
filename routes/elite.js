var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Profile = mongoose.model('profile');
var multer = require('multer');
var path = require('path');





var TARGET_PATH = path.resolve(__dirname, '../writable/');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('elite');
});


router.post('/',  multer({ dest: './uploads/'}).single('resume'),
 function(req, res) {
  new Profile({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    eMail: req.body.eMail,
    essay: req.body.essay
  })
  .save(function(err, data) {
  //  console.log('profile data' + data);
  //  res.redirect('elite')
  })
  //console.log(req.body);
  //console.log(req.files);
  res.status(204).end();


});



module.exports = router;
