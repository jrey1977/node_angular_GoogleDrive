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

/*
const getFotos = async(req,res) => {
    const service = google.drive('v3');
    
    const respuesta = await service.files.list({
      pageSize: 1,
      q: "mimeType='image/jpeg'",
      fields: 'nextPageToken, files',
      orderBy: 'recency desc'
    })

    insertFotos(respuesta);

    while (arrayFilteredFiles.length < 5) {
        if (respuesta.data.nextPageToken && arrayFilteredFiles.length < 5){
            const respuesta = await service.files.list({
                pageSize: 1,
                q: "mimeType='image/jpeg'",
                fields: 'nextPageToken, files',
                orderBy: 'recency desc'
              })

            insertFotos(respuesta);
            
            console.log('arrayFilteredFiles', arrayFilteredFiles);
            console.log(arrayFilteredFiles.length);
        }
        else{
            console.log('arrayFilteredFiles', arrayFilteredFiles);
            res.json({
                ok: true,
                files: arrayFilteredFiles
            });
            break;
        }
    }

}

*/

const drive = google.drive('v3');
var pageToken = null;
// Using the NPM module 'async'
const getFotos = async.doWhilst(function (callback) {
  drive.files.list({
    q: "mimeType='image/jpeg'",
    fields: 'nextPageToken, files(id, name)',
    spaces: 'drive',
    pageToken: pageToken
  }, function (err, res) {
    if (err) {
      // Handle error
      console.error(err);
      callback(err)
    } else {
      res.files.forEach(function (file) {
        console.log('Found file: ', file.name, file.id);
      });
      pageToken = res.nextPageToken;
      callback();
    }
  });
}, function () {
  return !!pageToken;
}, function (err) {
  if (err) {
    // Handle error
    console.error(err);
  } else {
    // All pages fetched
    res.json({
        ok: true,
        files: arrayFilteredFiles
    });
  }
})

module.exports = {
    getFotos
}