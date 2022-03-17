var express = require("express");
var router = express.Router();

const {
  getNewFiles,
  getFiles,
  creoBaseDatos,
  borrarAchivo,
  borrarArchivoBBDD,
  getEtiquetasArchivoBBDD,
  getYearLabels,
  insertMasivoCategorias,
  getEtiquetasAllBBDD,
} = require("../controllers/archivos");

/* GET Archivos */
router.get("/", getNewFiles);

/* Genera Base de datos  */
router.get("/generaBDatos", creoBaseDatos);

/* Borra el archivo de la unidad de Google Drive */
router.get("/borrar/:idArchivo", borrarAchivo);

/* Borra el archivo de la base de datos */
router.get("/borrar/ArchivoBBDD/:idArchivo", borrarArchivoBBDD);

/* Obtiene las etiquetas de un archivo */
router.get("/etiquetas/:idArchivo", getEtiquetasArchivoBBDD);

/* Obtiene todas las etiquetas */
router.get("/etiquetas", getEtiquetasAllBBDD);

module.exports = router;
