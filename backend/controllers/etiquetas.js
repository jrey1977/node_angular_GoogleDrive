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

const grabarEtiqueta = async (req, res) => {
    let etiqueta = req.body;
    console.log('recibo esto:', etiqueta);
}

module.exports = {
  borrarEtiqueta,
  grabarEtiqueta
};
