var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form', {title: 'my awesome form'});
});



/* POST */

router.post('/', function(req, res) {
  console.log(req.body.comment);
  res.redirect('form')
});


module.exports = router;
