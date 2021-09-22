const {google} = require('googleapis');
const Foto = require('../models/foto');
const Video = require('../models/video');
const Etiqueta = require('../models/etiqueta');


const drive = google.drive('v3');
var pageToken = null;
var arrayParentsIds = [];



// async function insertCategoria(idParent) {
//     var idParentSaved = idParent;

//     console.log('Entro a la función que inserta categoría');

//     const response2 = await drive.files.get({
//         fileId: idParentSaved,
//         mymeType: 'application/vnd.google-apps.folder',
//         fields: 'name'
//     })

//     var nombreCategoria = response2.data.name;
//     console.log('nombre de la categoría que voy a insertar:', nombreCategoria);

//     var categoria = new Etiqueta ({
//         "id": idParentSaved,
//         "name": nombreCategoria,
//         "categoria": "si"
//     });
    
//     categoria.save();
// }


const insertMasivoCategorias = async(req, res) => {

    try{


        const response2 = await drive.files.list({
            q: `mimeType contains 'folder' and '0B5pqU4vxIuqcNW11VktFanA4U3M' in parents`,
            fields: 'nextPageToken, files',
            pageToken: pageToken,
            pageSize: 999,
            orderBy: 'createdTime desc'
        });
        
        console.log('Datos obtenidos:', response2.data.files.length);
        
        response2.data.files.forEach(function (file) {


                const categoria = new Etiqueta ({
                    "id":file.id,
                    "name":file.name,
                    "categoria": "si"
                });
                
                categoria.save();

        });

        pageToken = response2.data.nextPageToken;
        

        if( (pageToken !== undefined) ){
            console.log('Sigo insertando categorias...');
            insertMasivoCategorias();
        }else{
            console.log('Categorías insertadas');
        }
    } catch (error) {
        console.log('Ha habido un errror', error);
    }

    
}

const getFotos = async(req, res ) => {

    // TODO: CUANDO ESTÉN GRABADAS LAS FOTOS Y LAS ETIQUETAS/CATEGORÍAS,
    // HACER QUERY EN BD Y MOSTRAR PRIMERO FOTOS SIN ETIQUETAS CON CATEGORÍA "SI"
    // Y LUEGO EL RESTO DE FOTOS

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

const insertMasivoFotos = async(req, res ) => {  

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
                    "createdTime":file.createdTime,
                    "fileExtension":file.fileExtension,
                    "idFoto":file.id,
                    "width":file.imageMediaMetadata.width,
                    "height":file.imageMediaMetadata.height,
                    "modifiedTime":file.modifiedTime,
                    "name":file.name,
                    "parents": file.parents,
                    "size":file.size,
                    "webContentLink":file.webContentLink,
                    "webViewLink":file.webViewLink
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
};

const insertMasivoVideos = async(req, res ) => {
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
                    "idVideo":file.id,
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
                    "hasThumbnail": file.hasThumbnail
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

module.exports = {
    getFotos,
    insertMasivoFotos,
    insertMasivoCategorias,
    insertMasivoVideos
}