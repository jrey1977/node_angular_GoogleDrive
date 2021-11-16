const { response } = require("express");
const { google } = require("googleapis");

const Archivo = require("../models/archivo");
const Etiqueta = require("../models/etiqueta");

const drive = google.drive("v3");

var pageToken = null;
var arrayParentsIds = [];
var arrayNuevosParents = [];
var respuesta;
var todasLasCarpetasArr = [];

graboNuevasCategorias = async (req, res = response) => {
  /* arrayNuevosParents.forEach(function (idCategoria) {
        var nombreCategoria = await drive.files.list({
            q: `(mimeType contains 'application/vnd.google-apps.folder') and id = '${idCategoria}'`,
            fields: 'name',
            pageSize:1
        });
        var categoria = new Etiqueta ({
            "id":idCategoria,
            "name":nombreCategoria,
            "categoria": "no"
        });
        
        categoria.save(); 
    }) */

  const foldersRes = await drive.files.list({
    q: "mimeType = 'application/vnd.google-apps.folder'",
  });
  const foldersIdToName = new Object(
    foldersRes.data.files.reduce((obj, o) => ((obj[o.id] = o.name), obj), {})
  );

  arrayNuevosParents.forEach(function (idCategoria) {
    var nombreCategoria = foldersIdToName[idCategoria];
    console.log("nombreCategoria es ", nombreCategoria);
    var categoria = new Etiqueta({
      id: idCategoria,
      name: nombreCategoria,
      categoria: "no",
    });

    categoria.save();
  });
};

const getNewFiles = async (req, res = response) => {
  respuesta = res;
  // Compruebo que haya algún arhivo en la ba se de datos
  var archivosBBDD = await Archivo.find();
  if (archivosBBDD.length) {
    // Primero obtengo la fecha de modificación más reciente en la base de datos
    var ultimoArchivo = await Archivo.find().sort({ createdTime: -1 }).limit(1);
    var fechaUltimoArchivo = ultimoArchivo[0].createdTime;

    // Ahora busco en la unidad de Google Drive todos los ficheros
    // con fecha de modificación posterior
    const newFiles = await drive.files.list({
      q: `(mimeType contains 'image' or mimeType contains 'video') and createdTime > '${fechaUltimoArchivo}'`,
      fields: "files",
      pageSize: 100,
      orderBy: "createdTime desc",
    });

    console.log("Archivos nuevos encontrados:", newFiles.data.files.length);

    if (newFiles.data.files.length) {
      newFiles.data.files.forEach(function (file) {
        var nuevoArchivo = new Archivo({
          id: file.id,
          name: file.name,
          parents: file.parents,
          size: file.size,
          webContentLink: file.webContentLink,
          webViewLink: file.webViewLink,
          iconLink: file.iconLink,
          hasThumbnail: file.hasThumbnail,
          createdTime: file.createdTime,
          modifiedTime: file.modifiedTime,
          mimeType: file.mimeType || "",
          thumbnailLink: file.thumbnailLink || "",
          width:
            file.imageMediaMetadata?.width ||
            file.videoMediaMetadata?.width ||
            0,
          height:
            file.imageMediaMetadata?.height ||
            file.videoMediaMetadata?.height ||
            0,
          durationMillis: file.videoMediaMetadata?.durationMillis | 0,
        });
        nuevoArchivo.save();
        // Compruebo si es una nueva carpeta
        resultados = Etiqueta.find({ id: file.parents[0] });
        // Si es una carpeta nueva meto su ID en un array
        if (!resultados.length) {
          arrayNuevosParents.push(file.parents[0]);
        }
      });

      // Si hay alguna id de carpeta nueva en el array...
      if (arrayNuevosParents.length) {
        // Grabo las nuevas caropetas/etiquetas en la base de datos
        graboNuevasCategorias();
      }

      getFiles();
    } else {
      console.log("No hay nada nuevo, listo los archivos");
      getFiles();
    }
  } else {
    console.log("No hay nada, listo la nada");
    getFiles();
  }
};

const getFiles = async (req, res = response) => {
  console.log("Ahora listo los archivos");

  const archivos = await Archivo.find({});

  const totalFiles = [];

  archivos.forEach((file) => {
    totalFiles.push(file);
  });

  // Ordeno los resultados por fecha de creación descendiente
  totalFiles.sort(function (a, b) {
    var keyB = new Date(a.modifiedTime),
      keyA = new Date(b.modifiedTime);
    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  respuesta.json({
    ok: true,
    totalFiles,
  });
};

const getEtiquetasArchivoBBDD = async (req, res = response) => {
  respuesta = res;
  let idArchivo = req.params.idArchivo;
  console.log("idArchivo a buscar desde el back", idArchivo);
  try {
    arrayLabelNames = [];
    // let labels = await Archivo.find({ id: idArchivo }).then((archivo) => {
    //   console.log("archivo desde el then", archivo[0].etiquetas);
    //   archivo[0].etiquetas.forEach(async (idEtiqueta) => {
    //     etiquetaObtenida = await Etiqueta.find({ id: idEtiqueta }).select(
    //       "name"
    //     );
    //     arrayLabelNames.push(etiquetaObtenida);
    //   });
    //   respuesta.json({
    //     ok: true,
    //     arrayLabelNames,
    //   });
    //   //await Etiqueta.find({ id: archivo })
    // });

    // Método 2
    let archivo = await Archivo.find({ id: idArchivo });
    let etiquetasArchivo = archivo[0].etiquetas;
    var topIndex = etiquetasArchivo.length;
    console.log("topIndex es ", topIndex);
    etiquetasArchivo.forEach(async (etiqueta, index) => {
      console.log("etiqueta es ", etiqueta);
      nombreEtiqueta = await Etiqueta.find({ _id: etiqueta }).select("name");

      console.log("nombreEtiqueta es", nombreEtiqueta);
      await arrayLabelNames.push(nombreEtiqueta[0].name);
      console.log("Array de etiquetas obtenidas:", arrayLabelNames);
      if (arrayLabelNames.length == topIndex) {
        console.log("Devuelvo etiquetas:", arrayLabelNames);
        arrayLabelNames = Object.values(arrayLabelNames);
        respuesta.json({
          ok: true,
          arrayLabelNames,
        });
      }
    });

    // Ordeno los resultados por fecha de creación descendiente
    // etiquetasArchivoArr.sort(function (a, b) {
    //   var keyB = new Date(a.modifiedTime),
    //     keyA = new Date(b.modifiedTime);
    //   // Compare the 2 dates
    //   if (keyA < keyB) return -1;
    //   if (keyA > keyB) return 1;
    //   return 0;
    // });
  } catch (error) {
    console.log("Ha habido un error:", error);
  }
};

graboCategorias = async (req, res = response) => {
  const todasLasCarpetas = await drive.files.list({
    q: "mimeType contains 'folder'",
    fields: "nextPageToken, files",
    pageToken: pageToken,
    pageSize: 999,
    orderBy: "createdTime desc",
  });

  todasLasCarpetas.data.files.forEach(function (carpeta) {
    // Si la carpeta pertenece al array de parents la grabo en la base de datos
    if (arrayParentsIds.includes(carpeta.id)) {
      var etiqueta = new Etiqueta({
        id: carpeta.id,
        name: carpeta.name,
        categoria: "si",
      });
      etiqueta.save();
    }
  });

  pageToken = todasLasCarpetas.data.nextPageToken;

  if (pageToken !== undefined) {
    console.log("Sigo insertando categorías...");
    graboCategorias();
  } else {
    console.log("Ya están grabadas todas las categorías");
  }
};

const insertMasivoCategorias = async (req, res) => {
  try {
    textoQuery = "";

    // ARRAY DE CARPETAS QUE CONTIENEN CARPETAS
    arrayIds = [
      "0B5pqU4vxIuqcdmw5dTJLdGkwY00", // AMIGOS
      "0B5pqU4vxIuqcNEJvY0dIN0M1NHc", // FAMILIA REY
      "0B5pqU4vxIuqcUG10V2FwbWtnY1U", // FAMILIA REY -> FOTOS FAMILIA
      "0B5pqU4vxIuqcRENaTHFiNEg1dHM", // FAMILIA REY -> FOTOS FAMILIA -> FOTOS PA
      "0B5pqU4vxIuqcNW11VktFanA4U3M", // FAMILIA REY -> FOTOS FAMILIA -> FOTOS PA -> WEB ANTIGUA
    ];

    arrayIds.forEach((idIterada, index) => {
      if (index < arrayIds.length - 1) {
        textoQuery += `'${idIterada}' in parents or `;
      } else {
        textoQuery += `'${idIterada}' in parents`;
      }
    });

    console.log("textoQuery:", textoQuery);

    const response2 = await drive.files.list({
      q: `mimeType contains 'folder' and (${textoQuery})`,
      fields: "nextPageToken, files",
      pageToken: pageToken,
      pageSize: 999,
      orderBy: "createdTime desc",
    });

    response2.data.files.forEach(function (file) {
      const categoria = new Etiqueta({
        id: file.id,
        name: file.name,
        categoria: "si",
      });

      categoria.save();
    });

    pageToken = response2.data.nextPageToken;

    if (pageToken !== undefined) {
      console.log("Sigo insertando categorias...");
      insertMasivoCategorias();
    } else {
      console.log("Categorías insertadas");
      //insertMasivoArchivos(true);
    }
  } catch (error) {
    console.log("Ha habido un errror:", error);
  }
};

const insertMasivoArchivos = async (primeraVez = false) => {
  // Si es la primera llamada a la función, borro todo antes
  if (primeraVez) {
    const deleteFotos = await Archivo.deleteMany({});
    insertMasivoArchivos();
  } else {
    try {
      const response = await drive.files.list({
        q: "mimeType contains 'image' or mimeType contains 'video'",
        fields: "nextPageToken, files",
        pageToken: pageToken,
        pageSize: 999,
        orderBy: "createdTime desc",
      });

      console.log("type of es", typeof response.data.files);

      response.data.files.forEach(async function (file) {
        if (file?.parents) {
          // Compruebo que esta imagen o video pertenezca a alguna de las etiquetas que son categoría
          var archivoBueno = await Etiqueta.find({ id: file.parents[0] });
          console.log("archivoBueno.length", archivoBueno.length);
          if (archivoBueno.length) {
            console.log("archivoBueno es", archivoBueno);
            var _idEtiqueta = archivoBueno[0]._id;
            console.log("_idEtiqueta es", _idEtiqueta);

            var archivo = new Archivo({
              id: file.id,
              name: file.name,
              parents: file.parents,
              size: file.size,
              webContentLink: file.webContentLink,
              webViewLink: file.webViewLink,
              iconLink: file.iconLink,
              hasThumbnail: file.hasThumbnail,
              createdTime: file.createdTime,
              modifiedTime: file.modifiedTime,
              categoria: _idEtiqueta,
              etiquetas: [],
              mimeType: file.mimeType,
              thumbnailLink: file.thumbnailLink || "",
              width:
                file.imageMediaMetadata?.width ||
                file.videoMediaMetadata?.width ||
                0,
              height:
                file.imageMediaMetadata?.height ||
                file.videoMediaMetadata?.height ||
                0,
              durationMillis: file.videoMediaMetadata?.durationMillis | 0,
            });

            archivo.save();
          }
        }
      });

      pageToken = response.data.nextPageToken;

      if (pageToken !== undefined) {
        console.log("Sigo insertando archivos...");
        insertMasivoArchivos();
      } else {
        console.log("Ya he grabado los archivos");
        // Elimino duplicidades del array de parents
        // arrayParentsIds = [...new Set(arrayParentsIds)];
        // graboCategorias();
      }
    } catch (error) {
      console.log("Ha habido un error:", error);
    }
  }
};

const creoBaseDatos = async (_req, _res) => {
  console.log("Voy a generar base de datos desde controller de backend");
  // await insertMasivoArchivos(true);
  //insertMasivoCategorias();
  console.log("Base de datos generada");
};

const borrarAchivo = async (req, res) => {
  //var resDelete = res;
  let idArchivo = req.params.idArchivo;
  try {
    return drive.files
      .delete({
        fileId: idArchivo,
      })
      .then(
        function (response) {
          // Handle the results here (response.result has the parsed body).
          //return response;
          res.json({
            respuesta: response,
          });
        },
        function (err) {
          console.error("Execute error", err);
          return err;
        }
      );
  } catch (error) {
    console.log("Ha habido un error:", error);
  }
};

const borrarArchivoBBDD = async (req, res) => {
  let idArchivo = req.params.idArchivo;
  try {
    // Obtengo el id del padre del archivo antes de borrarlo
    var file = await Archivo.find({ id: idArchivo });
    var idParentFile = file[0].parents[0];

    // Borro el archivo
    await Archivo.deleteMany({ id: idArchivo });

    // Si no he encontrado otros archivos con ese padre, borro el padre
    var ficherosCarpeta = await Archivo.find({ parents: idParentFile });
    console.log("ficherosCarpeta", ficherosCarpeta);
    console.log("ficherosCarpeta.length", ficherosCarpeta.length);

    if (ficherosCarpeta.length == 0) {
      console.log("No hay otros archivos en esa carpeta, así que la borro");
      await Etiqueta.deleteMany({ id: idParentFile });
      try {
        return drive.files
          .delete({
            fileId: idParentFile,
          })
          .then(
            function (response) {
              // Handle the results here (response.result has the parsed body).
              //return response;
              res.json({
                respuesta: "ok",
              });
            },
            function (err) {
              console.error("Execute error", err);
              return err;
            }
          );
      } catch (error) {
        console.log(
          "Ha habido un error al borrar la carpeta de la unidad de Google drive:",
          error
        );
        res.json({
          respuesta: "Error",
        });
      }
    }

    res.json({
      respuesta: "ok",
    });
  } catch (error) {
    console.log(
      "Ha habido un error eliminando el archivo de la base de datos:",
      error
    );
  }
};

module.exports = {
  getNewFiles,
  getFiles,
  creoBaseDatos,
  borrarAchivo,
  borrarArchivoBBDD,
  getEtiquetasArchivoBBDD,
};
