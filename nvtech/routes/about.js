var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About | novoTech',
						section_id: 'about_header' });
});

module.exports = router;