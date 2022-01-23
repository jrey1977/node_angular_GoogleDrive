var express = require("express");
var router = express.Router();

const { borrarEtiqueta, grabarEtiqueta } = require("../controllers/etiquetas");

/* Borra la etiqueta recibida por parámetro */
router.delete("/borrar/:idEtiqueta", borrarEtiqueta);

router.post("/grabar/", grabarEtiqueta);

module.exports = router;
