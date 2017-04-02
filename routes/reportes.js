var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {"test": 1234};
  res.render('reportes', data);
});

module.exports = router;
