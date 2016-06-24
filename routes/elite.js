var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Profile = mongoose.model('profile');


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

});



module.exports = router;
