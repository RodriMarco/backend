var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var horariosModel = require('./../models/horariosModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedades => {
        if (novedades.img_id) {
            const imagen = cloudinary.url(novedades.img_id, {
                width: 800,
                height: 800,
                crop: 'fill'
            });
            return {
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    });

    res.json(novedades);

});

router.get('/horarios', async function (req, res, next) {
    let horas = await horariosModel.getHorarios();

    horas = horas.map(horas => {
        return {
            ...horas,
            }
        
    });

    res.json(horas);
});

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'rodrigo.marco9@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} se contacto a través de la Web y quiere más información a este correo: ${req.body.email}   <br> Realizo el siguiente comentario: ${req.body.mensaje}. <br> Su tel es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;