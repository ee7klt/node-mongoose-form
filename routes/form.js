var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('comments');


/* GET users listing. */
router.get('/', function(req, res, next) {
  Comment.find(function(err, comments) {
    console.log(comments)
  res.render('form', {title: 'my awesome form', comments: comments});
    })
});



/* POST */

router.post('/', function(req, res) {
  new Comment({title: req.body.comment})
  .save(function(err, comment) {
    console.log('added comment' + comment);
   res.redirect('form')
  })

});


module.exports = router;
