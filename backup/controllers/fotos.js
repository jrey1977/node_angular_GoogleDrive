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
    drive.files.list({
        q: "mimeType='image/jpeg'",
        fields: 'nextPageToken, files(id, name)',
        pageToken: pageToken,
        pageSize: 1000
    }, function (err, res) {
        if (err) {
            // Handle error
            console.error('No se ha obtenido ningún registro', err);
            callback(err)
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
                console.log('Devuelvo datos');
                return arrayFilteredFiles;
            }else{
                obtengoDatos();
            }
        }
    });
}

const getFotos = async(req,res) => {
    let resultados;
    try{
      resultados = await obtengoDatos();
    }
    catch(err){
      console.log('Ha ocurrido un error: ',err);
    }
    
    console.log('Resultados guardados en await:', resultados);
    
    res.json({
        ok: true,
        files: resultados
    });
}


module.exports = {
    getFotos
}