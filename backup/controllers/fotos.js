const {google} = require('googleapis');
const async = require("async");

let arrayFilteredFiles = [];

function insertFotos(respuesta){
  respuesta.data.files.map(
    (fotoIterada)=>{

      let {
        createdTime, 
        fileExtension,
        id,
        imageMediaMetaData, 
        modifiedTime, 
        name, 
        parents, 
        size,
        webContentLink,
        webViewLink
      } = fotoIterada;

      fileExtension !== undefined ? fileExtension : 'no';
      imageMediaMetaData !== undefined ? 
          (width = imageMediaMetaData.width, height = imageMediaMetaData.height) :
          (width="no", height="no");
      parents !== undefined ? padre = parents[0] : padre = 'no';
      webContentLink !== undefined ? webContentLink : 'no';
      webViewLink !== undefined ? webViewLink : 'no';

      var fotoFiltrada = {
        createdTime,
        fileExtension,
        id,
        width: width,
        height: height,
        modifiedTime,
        name,
        parents: padre,
        size,
        webContentLink,
        webViewLink
      };
      arrayFilteredFiles.push(fotoFiltrada);
    }
  );
}

const drive = google.drive('v3');
var pageToken = null;

function obtengoDatos(){
    console.log('Entro a por los datos');

    return new Promise((resolve, reject) => {
      drive.files.list({
          q: "mimeType='image/jpeg'",
          fields: 'nextPageToken, files(id, name)',
          pageToken: pageToken,
          pageSize: 1000
      }, function (err, res) {
          if (err) {
              // Handle error
              console.error('No se ha obtenido ningún registro', err);
              reject
          } else {
              console.log('Itero por los datos');
              res.data.files.forEach(function (file) {
                  //console.log('Found file: ', file.name, file.id);
                  var fotoFiltrada = {
                      id: file.id,
                      name: file.name
                  };
                  arrayFilteredFiles.push(fotoFiltrada);
              });
              pageToken = res.data.nextPageToken;
              console.log('pageToken es', pageToken);
              if(pageToken === undefined){
                  console.log('Devuelvo datos', arrayFilteredFiles.length);
                  resolve('Éxito');
              }else{
                  obtengoDatos();
              }
          }
      });
    }).then( (resultados)=>{
        console.log('Estoy en el then');
        return resultados;
    });
    
}

const getFotos = async(req,res) => {
  return new Promise((resolve, reject) => {
    drive.files.list({
        q: "mimeType='image/jpeg'",
        fields: 'nextPageToken, files(id, name)',
        pageToken: pageToken,
        pageSize: 1000
    }, function (err, res) {
        if (err) {
            // Handle error
            console.error('No se ha obtenido ningún registro', err);
            reject
        } else {
            console.log('Itero por los datos');
            res.data.files.forEach(function (file) {
                //console.log('Found file: ', file.name, file.id);
                var fotoFiltrada = {
                    id: file.id,
                    name: file.name
                };
                arrayFilteredFiles.push(fotoFiltrada);
            });
            pageToken = res.data.nextPageToken;
            console.log('pageToken es', pageToken);
            if(pageToken === undefined){
                console.log('Devuelvo datos', arrayFilteredFiles.length);
                resolve('Éxito');
            }else{
                getFotos();
            }
        }
    });
  }).then( (resultados)=>{
      console.log('Estoy en el then');
      return resultados;
  });
}


module.exports = {
    getFotos
}