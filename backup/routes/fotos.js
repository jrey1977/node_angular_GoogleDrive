var express = require('express');
var router = express.Router();

const { getFotos, insertMasivoFotos } = require('../controllers/fotos');

/* GET home page. */
router.get('/', getFotos);

/* Insert masivo. */
router.get('/insertar', insertMasivoFotos);

module.exports = router;