const { response } = require("express");

const Etiqueta = require("../models/etiqueta");

var respuesta;

const borrarEtiqueta = async (req, res) => {
  //var resDelete = res;
  let idEtiqueta = req.params.idEtiqueta;
  try {
    // Borro etiqueta de la base de datos
    await Etiqueta.delete({ id: idEtiqueta });
    res.json({
      respuesta: "OK",
    });
  } catch (error) {
    res.json({
      respuesta: error,
    });
  }
};

module.exports = {
  borrarEtiqueta,
};
