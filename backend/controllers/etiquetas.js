const { response } = require("express");
const mongoose = require("mongoose");

const Etiqueta = require("../models/etiqueta");
const Archivo = require("../models/archivo");

var respuesta;

const borrarEtiqueta = async (req, res) => {
  //var resDelete = res;
  let idEtiqueta = req.body.idEtiqueta;
  let idArchivo = req.body.idArchivo;

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
      // Si no la usan más archivos y no es una etiqueta de categoría,
      //  borro la etiqueta de la tabla etiquetas y luego se la quito al archivo
      var etiqueta = await Etiqueta.find({
        _id: mongoose.Types.ObjectId(idEtiqueta),
      });
      console.log("etiqueta encontrada:", etiqueta);
      if (etiqueta[0].categoria === "no") {
        await Etiqueta.deleteOne({ _id: idEtiqueta });
      }
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

let idEtiquetas = [];

function grabaEtiquetaIterada(tagName, idArchivo){
  return new Promise( async(resolve, reject) => {
      var etiquetaExistente = await Etiqueta.find({ name: tagName });
      if (etiquetaExistente.length) {
        // Obtengo la id de la etiqueta que ya existe
        console.log("Ya existia esta etiqueta");
        var idEtiqueta = etiquetaExistente[0]._id;
        console.log("Y su id es:", idEtiqueta);
      } else {
        // Grabo la etiquqeta
        var nuevaEtiqueta = new Etiqueta({
          name: tagName,
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
      idEtiquetas.push(idEtiqueta);
      resolve(true);
  });
}

const grabarEtiquetas = async (req, res) => {
  let nombreEtiquetas = req.body.nombres;
  let idArchivo = req.body.idArchivo;
  let archivo = await Archivo.find({ id: idArchivo });
  let etiquetasArchivo = archivo[0].etiquetas.length;

  for( const tagName of nombreEtiquetas ){
        await grabaEtiquetaIterada(tagName, idArchivo);
  }

  res.json({
    respuesta: "OK",
    etiquetasPrevias: etiquetasArchivo,
    idNuevasEtiquetas: idEtiquetas,
  });

 /*  try {
    // Compruebo si este archivo no tiene ninguna etiqueta previa,
    // ya que si es así lo pasaré al listado de archivos etiquetados
    let archivo = await Archivo.find({ id: idArchivo });
    let etiquetasArchivo = archivo[0].etiquetas.length;

    // Primero compruebo si hay ya alguna etiqueta con ese nombre
    var etiquetaExistente = await Etiqueta.find({ name: nombreEtiquetas });
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
      idNuevaEtiqueta: idEtiqueta,
    });
  } catch (error) {
    console.log("Error: ", error);
    res.json({
      respuesta: error,
    });
  } */
};

const obtenerNombresEtiquetas = async (req, res) => {
  let nombresObtenidos = await Etiqueta.find({
    _id: { $in: req.body.arrayIds },
  });
  res.json({
    respuesta: "OK",
    nombres: nombresObtenidos,
  });
};

const obtenerNombreEtiqueta = async (req, res) => {
  let idEtiqueta = req.params.idEtiqueta;
  let nombreObtenido = await Etiqueta.find({
    id: idEtiqueta,
  });
  res.json({
    respuesta: "OK",
    nombre: nombreObtenido[0].name,
  });
};

const obtenerUsosEtiqueta = async (req, res) => {
  let idEtiqueta = req.params.idEtiqueta;
  console.log("Busco etiqueta con id", idEtiqueta);
  let etiqueta = await Etiqueta.find({
    _id: mongoose.Types.ObjectId(idEtiqueta),
  });
  console.log("Etiqueta encontrada?:", etiqueta);
  let usosEtiqueta = await Archivo.find({
    etiquetas: mongoose.Types.ObjectId(idEtiqueta),
  });
  var categoria;
  if (etiqueta.length > 0) {
    categoria = etiqueta[0].categoria;
  } else {
    categoria = "no";
  }
  res.json({
    respuesta: "OK",
    usos: usosEtiqueta.length,
    categoria,
  });
};

module.exports = {
  borrarEtiqueta,
  grabarEtiquetas,
  obtenerNombresEtiquetas,
  obtenerNombreEtiqueta,
  obtenerUsosEtiqueta,
};
