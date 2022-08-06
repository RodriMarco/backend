var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
const { title } = require('process');

var app = express();

var usuarioadmin = "rodriadmin";
var contrasenaadmin = "ironboxingadmin";

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'rodriadmin',
  resave: 'false',
  saveUnitialized: true
}));


//app.use('/users', usersRouter);

app.use('/admin/login', loginRouter);
// app.use('/', indexRouter);

app.get('/',function(req,res){
  var conocido = Boolean(req.session.nombre);
  if (req.session.nombre === usuarioadmin) {
    if (req.session.contrasena === contrasenaadmin) {
      res.render('index',{
        title: "Pagina de admins",
        nombre: req.session.nombre,
        layout: 'admin/layout'
      });
    } else {
      res.redirect('/admin/login');
      
    }
  }
  else {
    res.redirect('/admin/login');    
  }
  
});

app.post('/ingresar', function (req, res) {

  req.session.nombre = req.body.nombre
  req.session.contrasena = req.body.contrasena
  
  if (req.session.nombre === usuarioadmin) {
    if (req.session.contrasena === contrasenaadmin) {
      res.redirect('/');
    } else {
      res.redirect('/admin/login');
      
    }
  }
  else {
    res.redirect('/admin/login');    
  }

});

app.get('/salir', function (req, res) {
  req.session.destroy();
  res.redirect('/');
})



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
