var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login',{
    layout:'admin/layout',
    
  }); //En res.render admin/login es el body de alguna manera que se usa en el layout.hbs
  
});

module.exports = router;
