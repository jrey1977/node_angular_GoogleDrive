var express = require("express");
var router = express.Router();

const { borrarEtiqueta } = require("../controllers/etiquetas");

/* Borra la etiqueta recibida por parámetro */
router.get("/borrar/:idEtiqueta", borrarEtiqueta);

module.exports = router;
