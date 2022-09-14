var express = require("express");
var router = express.Router();

const {
  borrarEtiqueta,
  grabarEtiquetas,
  obtenerNombresEtiquetas,
  obtenerNombreEtiqueta,
  obtenerUsosEtiqueta,
} = require("../controllers/etiquetas");

/* Borra la etiqueta recibida por parámetro */
router.put("/borrar/", borrarEtiqueta);

router.post("/grabar/", grabarEtiquetas);

router.post("/nombres/", obtenerNombresEtiquetas);

router.get("/nombre/:idEtiqueta", obtenerNombreEtiqueta);

router.get("/usos/:idEtiqueta", obtenerUsosEtiqueta);

module.exports = router;
