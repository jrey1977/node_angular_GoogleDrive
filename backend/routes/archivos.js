var express = require("express");
var router = express.Router();

const {
  getNewFiles,
  getFiles,
  creoBaseDatos,
  borrarAchivo,
  borrarArchivoBBDD,
  getEtiquetasArchivoBBDD,
} = require("../controllers/archivos");

/* GET Archivos */
router.get("/", getFiles);

/* GET Nuevos archivos */
router.get("/nuevos", getNewFiles);

/* Genera Base de datos  */
router.get("/generaBDatos", creoBaseDatos);

/* Borra el archivo de la unidad de Google Drive */
router.get("/borrar/:idArchivo", borrarAchivo);

/* Borra el archivo de la base de datos */
router.get("/borrar/ArchivoBBDD/:idArchivo", borrarArchivoBBDD);

/* Obtiene las etiquetas de un archivo */
router.get("/etiquetas/:idArchivo", getEtiquetasArchivoBBDD);

module.exports = router;
