var express = require('express');
var router = express.Router();

const { getFiles, creoBaseDatos } = require('../controllers/archivos');

/* GET Archivos */
router.get('/', getFiles);

/* Genera Base de datos  */
router.get('/generaBDatos', creoBaseDatos);

module.exports = router;