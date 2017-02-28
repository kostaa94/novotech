var express = require('express');
var router = express.Router();

/* GET team page. */
router.get('/', function(req, res, next) {
  res.render('team', { title: 'Team | novoTech',
						section_id: 'team_header'  });
});

module.exports = router;