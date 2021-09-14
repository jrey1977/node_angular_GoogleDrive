const { Schema, model } = require('mongoose');

const FotoSchema = Schema({
    id: {
        type: String,
        required: true
    },
    createdTime: {
        type: String,
        required: true
    },
    fileExtension: {
        type: String,
        required: false
    },
    idFoto: {
        type: String,
        required: false
    },
    width: {
        type: Number,
        required: false
    },
    height: {
        type: Number,
        required: false
    }
    
});

/*
"_id":{
    "$oid":"6133619121631892a8b87fff"
},
            "createdTime":"2021-08-22T13:32:12.268Z",
            "fileExtension":"jpg",
            "idFoto":"1G0_S1QrrW17V_C7JbWLrDb3xaNwa_tfN",
            "width":1000,
            "height":750,
            "modifiedTime":"2021-08-22T13:32:10.874Z",
            "name":"piscinita.jpg",
            "parents":"1qfLV68mzQZtmlVf37sFFd_Z_BDgeWBhn",
            "size":772822,
            "webContentLink":"https://drive.google.com/uc?id=1GD-IOE0bHf3rNBSaj2x5XTIzJeKmYubX&export=download",
            "webViewLink":"https://drive.google.com/file/d/1GD-IOE0bHf3rNBSaj2x5XTIzJeKmYubX/view?usp=drivesdk",
            "etiquetas":{
                "6133633c21631892a8b88003":"amigos",
                "6133639d21631892a8b88008":"2020"},
                "idCategoria":"6133633c21631892a8b88003"
            }
*/

FotoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Foto', FotoSchema );
