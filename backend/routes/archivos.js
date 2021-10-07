var express = require('express');
var router = express.Router();

const { getFiles, creoBaseDatos, borrarAchivo, borrarArchivoBBDD } = require('../controllers/archivos');

/* GET Archivos */
router.get('/', getFiles);

/* Genera Base de datos  */
router.get('/generaBDatos', creoBaseDatos);

/* Borra el archivo de la unidad de Google Drive */
router.get('/borrar/:idArchivo', borrarAchivo);

/* Borra el archivo de la base de datos */
router.get('/borrar/ArchivoBBDD/:idArchivo', borrarArchivoBBDD);

module.exports = router;