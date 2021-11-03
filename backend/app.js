// Variables de entorno
require('dotenv').config()

// Importo librerías
const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

// Google API
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');

// LiveReload para recargar servidor y página al hacer cambios
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// Arranco el server
var app = express();

// Configurar CORS
app.use( cors() );

// Base de datos
dbConnection();

// Lectura y parseo del body
app.use( express.json() );

// Aplico middleware de LiveReload
app.use(connectLiveReload());

// Establezco directorio y motor para plantillas 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas principales del back
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const fotosRouter = require('./routes/fotos');
const archivosRouter = require('./routes/archivos');
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fotos', fotosRouter);
app.use('/archivos', archivosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Mando credenciales de Google
async function signInGoogle() {
    // Obtain user credentials to use for the request
    const auth = await authenticate({
      keyfilePath: path.join(__dirname, './oauth2.keys.json'),
      scopes: 'https://www.googleapis.com/auth/drive',
    });
    google.options({auth});
}

signInGoogle();

module.exports = app;
