const { Schema, model } = require('mongoose');

const FotoSchema = Schema({
    createdTime: {
        type: String,
        required: true
    },
    fileExtension: {
        type: String,
        required: true
    },
    idFoto: {
        type: String,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    modifiedTime: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    parents: {
        type: Array,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    webContentLink: {
        type: String,
        required: true
    },
    webViewLink: {
        type: String,
        required: true
    },
    etiquetas: {
        type: Array,
        required: false
    }
});


FotoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Foto', FotoSchema );
