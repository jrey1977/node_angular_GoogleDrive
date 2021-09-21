const {google} = require('googleapis');
const Foto = require('../models/foto');
const Etiqueta = require('../models/etiqueta');
const fs = require('fs');


const drive = google.drive('v3');
var pageToken = null;
var arrayParentsIds = [];
var arraySinDuplicados = [];



async function insertCategoria(idParent) {
    var idParentSaved = idParent;

    console.log('Entro a la función que inserta categoría');

    const response2 = await drive.files.get({
        fileId: idParentSaved,
        mymeType: 'application/vnd.google-apps.folder',
        fields: 'name'
    })

    var nombreCategoria = response2.data.name;
    console.log('nombre de la categoría que voy a insertar:', nombreCategoria);

    var categoria = new Etiqueta ({
        "id": idParentSaved,
        "name": nombreCategoria,
        "categoria": "si"
    });
    
    categoria.save();
}


const insertMasivoCategorias = async(req, res) => {

    try{

<<<<<<< HEAD
        textoQuery = "";

        arrayIds = ["0B5pqU4vxIuqcdmw5dTJLdGkwY00",
        "8Z11kvB5jZe3qYzD16GSdwZEVfjej5k",
        "1FKxdg5My7zpXpYrWJG1bcx8FXa6pt7RP",
        "1xWsBPioMM2cL7hmfoll0ywEaJmuw1I",
        "1--2zAvYRZtI-vrVsAS_5gojxauNOaqhV",
        "1HirD4hCFpuRuGMjQZygIdptSzTCgFUZT",
        "1MUBul860Qbvm22OoJb1AVMMTl2ubJtbC",
        "1qfLV68mzQZtmlVf37sFFd_Z_BDgeWBhn",
        "13eTLU37AmwEVkk3UJW6nLGEtoOKwFFZt",
        "1tEY6D4YJGUb08hTS1oYmNTFxJSbALf1y",
        "1CTfJxFrc4I4H-lza4P_Oic48tfUIbFOY",
        "1ysStZqHhJY-3PyZ9QoIgpubKvn69bLDW",
        "1eSbaZUhfvncRe0T0RBuo2XdArQE1tuXq",
        "1GySa5QYIdFl9KX5CNXQvvi86Yf_QrzyB",
        "1jjy2MVLco4Enf-pOCGY-x583ZoTmEo36",
        "1v_E1jMfT1R1OUhWMcrHO95wPph9k27Ab",
        "11c1JZ0FQ424F_1eoWS88TEpoF4jKwXbP",
        "1u08tAlslTT7KYUR4lkg1q511rCWgt8hv",
        "1pVd-GjERr2q3xfmCoT1yJ4tXQuJIywzz",
        "1nRVg72Tl63crC_bRYcYtHYOQuc0QbNkP",
        "0B5pqU4vxIuqcRXBBcVp2QVdMdzA",
        "0B5pqU4vxIuqcZGlybzgtdUh0aDg",
        "0B5pqU4vxIuqcYlN3VzZiSGxkZ00",
        "0B5pqU4vxIuqcLXZMaHh0VWNnVlE",
        "0B5pqU4vxIuqcTUZIRk43cTRlNWc",
        "0B5pqU4vxIuqcUllxZ0tMcl9GcUk",
        "0B5pqU4vxIuqcN09PdTkzZENPTkU",
        "0B5pqU4vxIuqcdGZmODdrM0F0RDQ",
        "0B5pqU4vxIuqceERxVFVCVlBKdEU",
        "11FHLMs8Y19oRxvU0AASF2KiAlo67WMRdcTbwXn5ua6M",
        "0B5pqU4vxIuqcc1NnM2lPNkhWWmc",
        "0B5pqU4vxIuqcd3ZHMGhRWUVpZGs ",
        "0B5pqU4vxIuqcZVl3NWt1MUNIalU",
        "0B5pqU4vxIuqcWVVqYVNESXl0S3c",
        "0B5pqU4vxIuqcMnhocUU5ejhfOHc",
        "0B5pqU4vxIuqcNEJvY0dIN0M1NHc",
        "0B5pqU4vxIuqcNHBmeWE1QjBubmM"]

        arrayIds.forEach( (idIterada, index)=>{
            if( index < (arrayIds.length-1) ){
                textoQuery += `'${idIterada}' in parents or `
            }else{
                textoQuery += `'${idIterada}' in parents`
            }
        });

        console.log('textoQuery:', textoQuery);

        textoQuery = "'0B5pqU4vxIuqcdmw5dTJLdGkwY00' in parents or '1FKxdg5My7zpXpYrWJG1bcx8FXa6pt7RP' in parents or '1xWsBPioMM2cL7hmfoll0ywEaJmuw1I'";

        
        const response2 = await drive.files.list({
            q: `mimeType contains 'folder' and (${textoQuery})`,
=======
        
        const response2 = await drive.files.list({
            q: "mimeType contains 'folder' and ('0B5pqU4vxIuqcU1BDaVdIcHRFQVk' in parents or '0B5pqU4vxIuqcdmw5dTJLdGkwY00' in parents)",
>>>>>>> main
            fields: 'nextPageToken, files',
            pageToken: pageToken,
            pageSize: 999,
            orderBy: 'createdTime desc'
        });
        

        
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
    } catch {
        console.log('Ha habido un errror');
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

module.exports = {
    getFotos,
    insertMasivoFotos,
    insertMasivoCategorias
}