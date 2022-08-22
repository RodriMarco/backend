var express = require('express');
var router = express.Router();
var novedadesModel = require('./../../models/novedadesModel');

router.get('/', async function (req, res, next) {
    var novedades = await novedadesModel.getNovedades();
    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: "admin/layout"
    });
});

router.post('/agregar', async (req,res,next)=>{
    try{
        if(req.body.titulo !="" && req.body.cuerpo !="" && req.body.fecha!=""){
            await novedadesModel.insertNovedades(req.body);
            res.redirect('/admin/novedades')
        }else{
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error:true, message: "Se requieren todos los campos"
            });
        }    
    }catch(error){
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error:true, message: "no se pudo cargar la novedad"
        });
    }
});

module.exports = router;