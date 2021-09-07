const {google} = require('googleapis');

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

const getFotos = async(req,res) => {
    const service = google.drive('v3');
    
    const respuesta = await service.files.list({
      pageSize: 900,
      q: "mimeType='image/jpeg'",
      fields: 'nextPageToken, files',
      orderBy: 'recency desc'
    })

    insertFotos(respuesta);

    while (arrayFilteredFiles.length < 500) {
        if (respuesta.data.nextPageToken){
            const respuesta = await service.files.list({
                pageSize: 900,
                q: "mimeType='image/jpeg'",
                fields: 'nextPageToken, files',
                orderBy: 'recency desc'
              })

            insertFotos(respuesta);
        
            console.log(arrayFilteredFiles.length);
        }
        else{
          console.log('arrayFilteredFiles', arrayFilteredFiles);
            res.json({
                ok: true,
                files: arrayFilteredFiles,
                token
            });
            break;
        }
    }

}

module.exports = {
    getFotos
}