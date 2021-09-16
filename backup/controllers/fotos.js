const {google} = require('googleapis');
const Foto = require('../models/foto');
const Etiqueta = require('../models/etiqueta');


const drive = google.drive('v3');
var pageToken = null;
let arrayParentsIds = [];


async function insertCategoria(idParent) {
    var idParentSaved = idParent[0];

    console.log('idParentSaved', idParentSaved);

    /*const response2 = await drive.files.list({
        q: "fileId contains '1qfLV68mzQZtmlVf37sFFd_Z_BDgeWBhn'",
        fields: 'files',
        pageSize: 1
    });*/


    // COSAS DE INTERNET
    const response2 = await drive.files.get({
        fileId: idParentSaved,
        mymeType: 'application/vnd.google-apps.folder',
        fields: 'name'
    })

    var nombreCategoria = response2.data.name;

    var categoria = new Etiqueta ({
        "id": idParentSaved,
        "name": nombreCategoria,
        "categoria": "si"
    });

    categoria.save();
    
}

const insertMasivoCategorias = async(req, res) => {

    try {

        // ITERO POR EL ARRAY FORMADO POR IDS DE PARENTS
        await arrayParentsIds.forEach( function(parentIterado) {
            console.log('parentId iterado:', parentIterado);
            insertCategoria(parentIterado);
        });

        console.log('Categorías insertadas');


    } catch {
        console.log('Error al insertar las categorías');
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
            pageSize: 1
        });
    
        response.data.files.forEach(function (file) {

                if(!file.fileExtension){
                    file.fileExtension = "jpg";
                }

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

                arrayParentsIds.push(foto.parents);
                
                foto.save();

        });
    
        pageToken = response.data.nextPageToken;
        console.log('pageToken',pageToken)
        console.log('arrayParentsIds', arrayParentsIds.length)
    
        if( (pageToken !== undefined) && arrayParentsIds.length < 6){
            console.log('Inserto fotos iteradas');
            insertMasivoFotos();
        }else{
            console.log('Fotos insertadas');
            insertMasivoCategorias();
        }
    } catch {
        res.json({
            resultado: 'Error al insertar las fotos'
        });
    }
};

module.exports = {
    getFotos,
    insertMasivoFotos,
    insertMasivoCategorias
}