var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registro', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.render('success', { title: 'Express' });
});
module.exports = router;
