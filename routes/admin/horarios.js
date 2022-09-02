var express = require('express');
var router = express.Router();
var horariosModel = require('./../../models/horariosModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/', async function (req, res, next) {
    var horarios = await horariosModel.getHorarios();

    // horarios = horarios.map(hora => {
    //      return {
    //             ...hora
    //         }
    // });


    res.render('admin/horarios', {
            layout: 'admin/layout',
            usuario: req.session.nombre,
            horarios
    });
});


router.get('/agregarClase', (req, res, next) => {
    res.render('admin/agregarClase', {
        layout: "admin/layout"
    });
});

router.post('/agregarClase', async (req, res, next) => {
    try {
        if(req.body.horario != ""){
            await horariosModel.insertHorarios(req.body);
            res.redirect('/admin/horarios')
        }else {
            res.render('admin/agregarClase', {
                layout: 'admin/layout',
                error: true,
                message: "Por favor especificar el horario de la clase a agregar"
            }); 
        }

    } catch (error) {
        res.render('admin/agregarClase', {
            layout: 'admin/layout',
            error: true,
            message: "no se pudo cargar el horario"
        });
    }
});

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await horariosModel.deleteHorariosById(id);
    res.redirect('/admin/horarios');
});

router.get('/modificarhorario/:id', async (req, res, next) => {
    var id = req.params.id;
    var horario = await horariosModel.getHorariosById(id);

    res.render('admin/modificarhorario', {
        layout: 'admin/layout',
        horario
    })
});

router.post('/modificarhorario', async (req, res, next) => {
    try {   
        var obj = {
            horario: req.body.horario,
            dia1: req.body.dia1,
            dia2: req.body.dia2,
            dia3: req.body.dia3,
            dia4: req.body.dia4,
            dia5: req.body.dia5,
            dia6: req.body.dia6,   
        }
        await horariosModel.modificarHorariosById(obj, req.body.id);
        res.redirect('/admin/horarios');
    } catch (error) {
        res.render('admin/modificarhorarios', {
            layout: 'admin/layout',
            error: true,
            message: "no se pudo modificar el horario"
        });
    }
});

router.get('/organizador', async (req, res, next) => {
    res.redirect('admin/organizador')
});

module.exports = router;