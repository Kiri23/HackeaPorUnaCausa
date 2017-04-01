var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registro', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log(req)
  var user_name=req.body.nombre;
  console.log("User name = "+user_name);
  res.render('success', { title: 'Express' });
});
module.exports = router;
