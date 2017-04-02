var express = require('express');
var router = express.Router();
var visitante = require('../model/visitantes')

/* GET home page. */
router.get('/', function(req, res, next) {
  visitante.find({}, function(err, data){
      console.log(data)
      res.render('reportes', {"data": data});
  });
  
});

module.exports = router;
