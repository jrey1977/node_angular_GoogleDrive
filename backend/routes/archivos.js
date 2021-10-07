var express = require('express');
var router = express.Router();

const { getFiles, creoBaseDatos, borrarAchivo } = require('../controllers/archivos');

/* GET Archivos */
router.get('/', getFiles);

/* Genera Base de datos  */
router.get('/generaBDatos', creoBaseDatos);

/* Borra archivo  */
router.get('/borrar/:idArchivo', borrarAchivo);

module.exports = router;