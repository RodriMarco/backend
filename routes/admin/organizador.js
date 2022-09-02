var express = require('express');
var router = express.Router();


router.get('/', async function (req, res, next) {
 
    res.render('admin/organizador', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
    });
});

router.get('/novedades', async function (req,res,next){
    res.redirect('/admin/novedades');
});

router.get('/horarios', async function (req,res,next){
    res.redirect('/admin/horarios');
});


module.exports = router;