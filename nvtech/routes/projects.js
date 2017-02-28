var express = require('express');
var router = express.Router();

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Projects | novoTech',
						section_id: 'projects_header'  });
});

module.exports = router;