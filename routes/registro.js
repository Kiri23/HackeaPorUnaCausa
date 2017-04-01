var express = require('express');
var router = express.Router();
var visitante = require('./model/visitantes')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registro', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log(req)
  var user_name=req.body.nombre;

  var visi = new visitante({
  nombre:user_name
});


visi.save(function(err, vis) {
  if (err) return console.error(err);
  console.dir(vis);
});

  console.log("User name = "+user_name);
  res.render('success', { title: 'Express' });
});
module.exports = router;
