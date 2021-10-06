const { response } = require('express');

const Foto = require('../models/foto');
const Video = require('../models/video');

const getFiles = async(req, res=response) => {

    const fotos = await Foto.find({});
    const videos = await Video.find({});

    const totalFiles = [];

    fotos.forEach( (file) => {
        totalFiles.push(file);
    });

    videos.forEach( (file) => {
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

const insertMasivoFotos = async(_req, _res ) => {  

    // Si hay algún registro, borro todo antes
    const numFotos = await Foto.find({}).length;
    if (numFotos){
        const deleteFotos = await Foto.drop();
        insertMasivoFotos();
    }else{
        try{
            const response = await drive.files.list({
                q: "mimeType contains 'image'",
                fields: 'nextPageToken, files',
                pageToken: pageToken,
                pageSize: 999,
                orderBy: 'createdTime desc'
            });
    
            console.log('type of es', typeof response.data.files)
        
            response.data.files.forEach(function (file) {
    
                    if(!file.fileExtension){
                        file.fileExtension = "jpg";
                    }
    
                    console.log('parent',file.parents[0] );
    
                    const foto = new Foto ({
                        "id":file.id,
                        "name":file.name,
                        "fileExtension":file.fileExtension,
                        "width":file.imageMediaMetadata.width,
                        "height":file.imageMediaMetadata.height,
                        "parents": file.parents,
                        "size":file.size,
                        "webContentLink":file.webContentLink,
                        "webViewLink":file.webViewLink,
                        "createdTime":file.createdTime,
                        "modifiedTime":file.modifiedTime
                    });
    
                    //arrayParentsIds.push(foto.parents[0]);
                    
                    //foto.save();
    
            });
        
            pageToken = response.data.nextPageToken;
            console.log('arrayParentsIds es', arrayParentsIds.length)
            
        
            if( (pageToken !== undefined) ){
                console.log('Sigo insertando fotos...');
                insertMasivoFotos();
            }else{
                insertMasivoCategorias();
            }
        } catch {
            console.log('Ha habido un errror');
        }
    }

    
};

const insertMasivoVideos = async(_req, _res ) => {
    try{

        const responseVideos = await drive.files.list({
            q: "mimeType contains 'video'",
            fields: 'nextPageToken, files',
            pageToken: pageToken,
            pageSize: 999,
            orderBy: 'createdTime desc'
        });

        responseVideos.data.files.forEach(function (file) {

                const video = new Video ({
                    "createdTime":file.createdTime,
                    "fileExtension":file.fileExtension,
                    "id":file.id,
                    "width":file.videoMediaMetadata.width,
                    "height":file.videoMediaMetadata.height,
                    "durationMillis": file.videoMediaMetadata.durationMillis,
                    "modifiedTime":file.modifiedTime,
                    "name":file.name,
                    "parents": file.parents,
                    "size":file.size,
                    "webContentLink":file.webContentLink,
                    "webViewLink":file.webViewLink,
                    "iconLink": file.iconLink,
                    "hasThumbnail": file.hasThumbnail,
                    "thumbnailLink": file.thumbnailLink
                });

                //arrayParentsIds.push(foto.parents[0]);
                
                video.save();

        });

        pageToken = response.data.nextPageToken;

        if( (pageToken !== undefined) ){
            console.log('Sigo insertando videos...');
            insertMasivoVideos();
        }

    } catch(error){
        console.log('Error', error);
    }
}

const creoBaseDatos = async( _req, _res) => {
    console.log('Voy a generar base de datos desde controller de backend');
    const metoFotos = await insertMasivoFotos();
}

module.exports = {
    getFiles,
    creoBaseDatos
}