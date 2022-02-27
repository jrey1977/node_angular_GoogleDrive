const { response } = require("express");
const mongoose = require("mongoose");

const Etiqueta = require("../models/etiqueta");
const Archivo = require("../models/archivo");

var respuesta;

const borrarEtiqueta = async (req, res) => {
  //var resDelete = res;
  let idEtiqueta = req.body.idEtiqueta;
  let idArchivo = req.body.idArchivo;
  console.log(`Borro etiqueta ${idEtiqueta} de archivo con id ${idArchivo}`);
  try {
    // Primero compruebo si esta etiqueta la usan más archivos
    let usosEtiqueta = await Archivo.find({
      etiquetas: mongoose.Types.ObjectId(idEtiqueta),
    });

    // Si la usan más archivos, solo la quito del archivo correspondiente
    if (usosEtiqueta.length > 1) {
      await Archivo.updateMany(
        { id: idArchivo },
        { $pull: { etiquetas: mongoose.Types.ObjectId(idEtiqueta) } }
      );
    } else {
      // Si no la usan más archivos, borro la etiqueta de la tabla
      // etiquetas y luego se la quito al archivo
      await Etiqueta.deleteOne({ _id: idEtiqueta });
      await Archivo.updateMany(
        { id: idArchivo },
        { $pull: { etiquetas: mongoose.Types.ObjectId(idEtiqueta) } }
      );
    }
    // Compruebo si al archivo le quedan etiquetas. Si no le
    // quedan etiquetas lo paso al listado de archivos sin etiquetar
    let archivo = await Archivo.find({ id: idArchivo });
    console.log("archivo:", archivo);
    let numEtiquetas = archivo[0].etiquetas.length;
    console.log("numEtiquetas:", numEtiquetas);
    if (!numEtiquetas) {
      console.log("No le quedan etiquetas, muevo el archivo");
      var tieneEtiquetas = false;
    } else {
      var tieneEtiquetas = true;
    }
    // Devuelvo la respuesta OK
    res.json({
      respuesta: "OK",
      etiquetado: tieneEtiquetas,
    });
  } catch (error) {
    console.log("Error:", error);
    res.json({
      respuesta: error,
    });
  }
};

const grabarEtiqueta = async (req, res) => {
  let nombreEtiqueta = req.body.nombre;
  let idArchivo = req.body.idArchivo;
  try {
    // Compruebo si este archivo no tiene ninguna etiqueta previa,
    // ya que si es así lo pasaré al listado de archivos etiquetados
    let archivo = await Archivo.find({ id: idArchivo });
    let etiquetasArchivo = archivo[0].etiquetas.length;

    // Primero compruebo si hay ya alguna etiqueta con ese nombre
    var etiquetaExistente = await Etiqueta.find({ name: nombreEtiqueta });
    if (etiquetaExistente.length) {
      // Obtengo la id de la etiqueta que ya existe
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
      etiquetasPrevias: etiquetasArchivo,
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
