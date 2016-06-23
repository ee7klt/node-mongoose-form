var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Profile = mongoose.model('profile');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('elite');
});


router.post('/', function(req, res) {
  new Profile({firstName: req.body.comment})
  .save(function(err, data) {
    console.log(data);
    //res.redirect('form')
  })

});



module.exports = router;
