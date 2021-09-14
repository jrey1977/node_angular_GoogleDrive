const {google} = require('googleapis');
const async = require("async");

var arrayFilteredFiles = [];

const drive = google.drive('v3');
var pageToken = null;
var fotos;

const getFotos = async(req, res ) => {

    console.log('arrayFilteredFiles:', arrayFilteredFiles.length);

    if( res !== undefined ){
        fotos = res;
    }

    const response = await drive.files.list({
        q: "mimeType='image/jpeg'",
        fields: 'nextPageToken, files(id, name)',
        pageToken: pageToken,
        pageSize: 1000
    });

    response.data.files.forEach(function (file) {
        //console.log('Found file: ', file.name, file.id);
        var fotoFiltrada = {
            id: file.id,
            name: file.name
        };
        arrayFilteredFiles.push(fotoFiltrada);
    });

    pageToken = response.data.nextPageToken;

    if(pageToken !== undefined){
        getFotos();
    }else{
        fotos.json({
            ok: true,
            files: arrayFilteredFiles
        });
        arrayFilteredFiles.length = 0;
    }
}

module.exports = {
    getFotos
}