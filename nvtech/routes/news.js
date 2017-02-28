var express = require('express');
var router = express.Router();

/* GET news page. */
router.get('/', function(req, res, next) {
  res.render('news', { title: 'News | novoTech',
						section_id: 'news_header' });
});

module.exports = router;