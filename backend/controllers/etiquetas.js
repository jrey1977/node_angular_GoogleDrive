const { response } = require("express");

const Etiqueta = require("../models/etiqueta");
const Archivo = require("../models/archivo");

var respuesta;

const borrarEtiqueta = async (req, res) => {
  //var resDelete = res;
  let idEtiqueta = req.params.idEtiqueta;
  console.log("Borro etiqueta ", idEtiqueta);
  try {
    // Primero compruebo si esta etiqueta la usan más archivos
    let usosEtiqueta = await Archivo.find({ etiquetas: idEtiqueta });
    console.log("Cantidad de archivos con esa etiqueta: ", usosEtiqueta.length);

    // Si la usan más archivos, solo la quito del archivo correspondiente
    if (usosEtiqueta > 1) {
      await Archivo.updateMany(
        { etiquetas: idEtiqueta },
        { $pull: { etiquetas: idEtiqueta } }
      );
    } else {
      // Si no la usan más archivos, borro la etiqueta de la tabla
      // etiquetas y luego se la quito al archivo
      await Etiqueta.deleteOne({ _id: idEtiqueta });
      await Archivo.updateMany(
        { etiquetas: idEtiqueta },
        { $pull: { etiquetas: idEtiqueta } }
      );
    }
    // Devuelvo la respuesta OK
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
  let nombreEtiqueta = req.body.nombre;
  let idArchivo = req.body.idArchivo;
  try {
    // Primero compruebo si hay ya alguna etiqueta con ese nombre
    var etiquetaExistente = await Etiqueta.find({ name: nombreEtiqueta });
    console.log("etiquetaExistente:", etiquetaExistente);
    console.log("etiquetaExistenteLength:", etiquetaExistente.length);
    if (etiquetaExistente.length) {
      // Obtengo la id de la e¡tiqueta que ya existe
      console.log("Ya existia esta etiqueta");
      var idEtiqueta = etiquetaExistente[0]._id;
      console.log("Y su id es:", idEtiqueta);
    } else {
      // Grabo la etiquqeta
      var nuevaEtiqueta = new Etiqueta({
        name: nombreEtiqueta,
        categoria: "no",
      });
      await nuevaEtiqueta.save();
      // Obtengo la id de la etiqueta que acabo de grabar
      var idEtiqueta = nuevaEtiqueta._id;
    }
    // Meto la etiqueta en el archivo
    await Archivo.updateOne(
      { id: idArchivo },
      { $push: { etiquetas: idEtiqueta } }
    );
    res.json({
      respuesta: "OK",
    });
  } catch (error) {
    console.log("Error: ", error);
    res.json({
      respuesta: error,
    });
  }
};

module.exports = {
  borrarEtiqueta,
  grabarEtiqueta,
};
