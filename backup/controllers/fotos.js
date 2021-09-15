const {google} = require('googleapis');
const Foto = require('../models/foto');
const Etiqueta = require('../models/etiqueta');

var arrayFilteredFiles = [];
const drive = google.drive('v3');
var pageToken = null;
var fotos;

const getFotos = async(req, res ) => {

    // console.log('arrayFilteredFiles:', arrayFilteredFiles.length);

    // if( res !== undefined ){
    //     fotos = res;
    // }

    // const response = await drive.files.list({
    //     q: "mimeType='image/jpeg'",
    //     fields: 'nextPageToken, files',
    //     pageToken: pageToken,
    //     pageSize: 1000
    // });

    // response.data.files.forEach(function (file) {
    //     //console.log('Found file: ', file.name, file.id);
    //     var fotoFiltrada = {
    //         id: file.id,
    //         name: file.name
    //     };
    //     arrayFilteredFiles.push(file);
    // });

    // console.log(arrayFilteredFiles);

    // pageToken = response.data.nextPageToken;

    // if(pageToken !== undefined){
    //     getFotos();
    // }else{
    //     fotos.json({
    //         ok: true,
    //         files: arrayFilteredFiles
    //     });
    //     arrayFilteredFiles.length = 0;
    // }
}



const insertarFotos = async(req, res ) => {

    try{

        // res.json({
        //     resultado: 'Foto insertada'
        // });

        

        const response = await drive.files.list({
            q: "mimeType='application/vnd.google-apps.folder' and '0B5pqU4vxIuqcU1BDaVdIcHRFQVk' in parents",
            fields: 'nextPageToken, files',
            pageToken: pageToken,
            pageSize: 1000
        });
    
        response.data.files.forEach(function (file) {

            // if(!file.fileExtension){
            //     file.fileExtension = "jpg";
            // }

            // const foto = new Foto ({
            //     "createdTime":file.createdTime,
            //     "fileExtension":file.fileExtension,
            //     "idFoto":file.id,
            //     "width":file.imageMediaMetadata.width,
            //     "height":file.imageMediaMetadata.height,
            //     "modifiedTime":file.modifiedTime,
            //     "name":file.name,
            //     "parents": file.parents,
            //     "size":file.size,
            //     "webContentLink":file.webContentLink,
            //     "webViewLink":file.webViewLink
            // });

            const etiqueta = new Etiqueta ({
                "id": file.id,
                "name": file.name,
                "categoria": "si"
            }) 
            
            etiqueta.save();
        });
    
        pageToken = response.data.nextPageToken;
    
        if(pageToken !== undefined){
            console.log('Inserto fotos iteradas');
            insertarFotos();
        }else{
            // fotos.json({
            //     ok: true,
            //     files: arrayFilteredFiles
            // });
            // arrayFilteredFiles.length = 0;
            console.log('Fotos insertadas');
        }
    } catch {
        res.json({
            resultado: 'Error al insertar las fotos'
        });
    }


};

module.exports = {
    getFotos,
    insertarFotos
}