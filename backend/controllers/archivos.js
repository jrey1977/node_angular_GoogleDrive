const {response} = require('express');
const {google} = require('googleapis');

const Archivo = require('../models/archivo');

const drive = google.drive('v3');

var pageToken = null;
var arrayParentsIds = [];

const getFiles = async(req, res=response) => {

    const archivos = await Archivo.find({});

    const totalFiles = [];

    archivos.forEach( (file) => {
        totalFiles.push(file);
    });

    // Ordeno los resultados por fecha de creación descendiente
    totalFiles.sort(function(a, b) {
        var keyB = new Date(a.modifiedTime),
            keyA = new Date(b.modifiedTime);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });
      
    res.json({
        ok: true,
        totalFiles
    })

}

const insertMasivoArchivos = async (primeraVez = false) => {  

    // Si es la primera llamada a la función, borro todo antes
    if (primeraVez){
        const deleteFotos = await Archivo.deleteMany({});
        insertMasivoArchivos();
    }else{
        try{
            const response = await drive.files.list({
                q: "mimeType contains 'image' or mimeType contains 'video'",
                fields: 'nextPageToken, files',
                pageToken: pageToken,
                pageSize: 999,
                orderBy: 'createdTime desc'
            });
    
            console.log('type of es', typeof response.data.files)
        
            response.data.files.forEach(function (file) {
    
                    const archivo = new Archivo ({
                        "id":file.id,
                        "name":file.name,
                        "parents": file.parents,
                        "size":file.size,
                        "webContentLink":file.webContentLink,
                        "webViewLink":file.webViewLink,
                        "iconLink":file.iconLink,
                        "hasThumbnail": file.hasThumbnail,
                        "createdTime": file.createdTime,
                        "modifiedTime":file.modifiedTime,
                        "fileExtension": file.fileExtension || '',
                        "thumbnailLink": file.thumbnailLink || '',
                        "width": file.imageMediaMetadata?.width || file.videoMediaMetadata?.width || 0,
                        "height": file.imageMediaMetadata?.height || file.videoMediaMetadata?.height || 0,
                        "durationMillis": file.videoMediaMetadata?.durationMillis | 0
                    });
    
                    //arrayParentsIds.push(foto.parents[0]);
                    
                    archivo.save();
    
            });
        
            pageToken = response.data.nextPageToken;
            console.log('arrayParentsIds es', arrayParentsIds.length)
            
        
            if( (pageToken !== undefined) ){
                console.log('Sigo insertando archivos...');
                insertMasivoArchivos();
            }
        } catch (error) {
            console.log('Ha habido un error:', error);
        }
    }

    
};

const creoBaseDatos = async( _req, _res) => {
    console.log('Voy a generar base de datos desde controller de backend');
    const metoFotos = await insertMasivoArchivos(true);
    console.log('Base de datos generada');
}

const borrarAchivo = async( req, res) => {
    //var resDelete = res;
    let idArchivo =  req.params.idArchivo;
    try {
        return drive.files.delete({
            "fileId": idArchivo
        }).then(
            function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("La respuesta de Google es:", response);
                //return response;
                res.json({
                    'respuesta': response
                })
            },
            function(err) { 
                console.error("Execute error", err); 
                return err;
            }
        );
    } catch (error) {
        console.log('Ha habido un error:', error);
    }
}

const borrarArchivoBBDD = async( req, res) => {
    let idArchivo =  req.params.idArchivo;
    try{
        await Archivo.deleteMany({ id: idArchivo });
        res.json({
            'respuesta': 'ok'
        })
    } catch(error){
        console.log('Ha habido un error eliminando el archivo de la base de datos:', error);
    }
}

module.exports = {
    getFiles,
    creoBaseDatos,
    borrarAchivo,
    borrarArchivoBBDD
}