var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload = require('express-fileupload');
var cors = require('cors');

require('dotenv').config();
var session = require('express-session');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/admin/login');
var organizadorRouter = require('./routes/admin/organizador');
var novedadesRouter = require('./routes/admin/novedades');
var horariosRouter = require('./routes/admin/horarios');

var apiRouter = require('./routes/api');

const {
  title
} = require('process');

var app = express();


//a
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'rodriadmin',
  resave: 'false',
  saveUnitialized: true
}));


secured = async (req, res, next) => {
  try {

    if (req.session.id_usuario) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
}

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

app.use('/admin/login', loginRouter);
app.use('/', indexRouter);
app.use('/admin/organizador', secured, organizadorRouter);
app.use('/admin/novedades', secured, novedadesRouter);
app.use('/admin/horarios', secured, horariosRouter);
app.use('/api', cors(), apiRouter);

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