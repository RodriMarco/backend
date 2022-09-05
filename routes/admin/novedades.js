var express = require('express');
var router = express.Router();
var novedadesModel = require('./../../models/novedadesModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/', async function (req, res, next) {
    var novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.image(novedad.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...novedad,
                imagen
            }

        } else {
            return {
                ...novedad,
                imagen: ''
            }
        }
    });


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

router.post('/agregar', async (req, res, next) => {
    try {

        // var img_id = '';
        // if (req.files && Object.keys(req.files).length > 0) {
        //     imagen = req.files.imagen;
        //     img_id = (await uploader(imagen.tempFilePath)).public_id;
        // }
        // console.log(img_id);
        if (req.body.titulo != "" && req.body.cuerpo != "" && req.body.fecha != "") {
            await novedadesModel.insertNovedades({
                ...req.body // spread > titulo,sub,cuerpo
                // img_id
            });
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: "Se requieren todos los campos"
            });
        }
    } catch (error) {
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: "no se pudo cargar la novedad"
        });
    }
});

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    let novedad = await novedadesModel.getNovedadesById(id);

    if(novedad.img_id){
        await (destroy(novedad.img_id));
    }
    
    await novedadesModel.deleteNovedades(id);
    res.redirect('/admin/novedades');
});

router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    var novedad = await novedadesModel.getNovedadesById(id);

    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
    })
});

router.post('/modificar', async (req, res, next) => {
    try {

        let img_id = req.body.img_original;
        let borrar_img_vieja = false;

        if(req.body.img_delete === "1"){
            img_id = null;
            borrar_img_vieja = true;
           } else{
            if(req.files && Object.keys(req.files).length > 0){
                imagen=req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
           }
           if (borrar_img_vieja && req.body.img_original){
                await(destroy(req.body.img_original));
           }

        var obj = {
            titulo: req.body.titulo,
            cuerpo: req.body.cuerpo,
            fecha: req.body.fecha,
            img_id
        }
        await novedadesModel.modificarNovedadesById(obj, req.body.id);
        res.redirect('/admin/novedades');
    } catch (error) {
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: "no se pudo modificar la novedad"
        });
    }
});


router.get('/organizador', async (req, res, next) => {
    res.redirect('admin/organizador')
});

module.exports = router;