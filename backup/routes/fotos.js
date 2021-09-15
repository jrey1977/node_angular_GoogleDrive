var express = require('express');
var router = express.Router();

const { getFotos, insertarFotos } = require('../controllers/fotos');

/* GET home page. */
router.get('/', getFotos);

/* Insert masivo. */
router.get('/insertar', insertarFotos);

module.exports = router;