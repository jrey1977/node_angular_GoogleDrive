const {google} = require('googleapis');

const getFotos = async(req,res) => {
    const service = google.drive('v3');
    var arrayFilteredFiles = [];
    const respuesta = await service.files.list({
      pageSize: 5,
      fields: 'nextPageToken, files',
    })
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
        /*newObject['uno'] = createdTime;
        newObject['dos'] = kind;*/
        console.log();
        arrayFilteredFiles.push(fotoFiltrada);
      }
    );

    res.json({
        ok: true,
        files: arrayFilteredFiles
    });
}

module.exports = {
    getFotos
}