var express = require('express');
var router = express.Router();

const { getFotos, insertMasivoFotos, insertMasivoCategorias, insertMasivoVideos, borrarImagen } = require('../controllers/fotos');

/* GET home page. */
router.get('/', getFotos);

/* Insert masivo. */
router.get('/insertar', insertMasivoVideos);

/* Borrar imagen */
router.get('/borrar/:imgId', borrarImagen)

module.exports = router;