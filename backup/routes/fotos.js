var express = require('express');
var router = express.Router();

const { getFotos, insertMasivoFotos, insertMasivoCategorias, insertMasivoVideos } = require('../controllers/fotos');

/* GET home page. */
router.get('/', getFotos);

/* Insert masivo. */
router.get('/insertar', insertMasivoVideos);

module.exports = router;