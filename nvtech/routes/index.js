var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'novoTech',
						section_id: 'main' });
});

module.exports = router;
