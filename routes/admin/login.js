var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.redirect('/admin/login');
  //En res.render admin/login es el body de alguna manera que se usa en el layout.hbs
});

router.post('/',async(req, res, next) => {
  try{
    var usuario = req.body.nombre;
    var password = req.body.contrasena;
        var data = await usuariosModel.getUserByUserAndPassword(usuario, password);

    if (data != undefined){
      req.session.id_usuario=data.id;
      req.session.nombre=data.usuario;
      res.redirect('/admin/organizador');
    }else{
      res.render('admin/login',{
        layout:'admin/layout',
        error: true
      });
    }
  } catch (error){
    console.log(error);
  }

});

router.get('/logout', function(req,res,next){
  req.session.destroy();
  res.redirect('admin/login',{
    layout:'admin/layout'
  });
});

module.exports = router;
