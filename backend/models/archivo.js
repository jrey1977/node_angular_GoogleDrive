const { Schema, model } = require('mongoose');

const ArchivoSchema = Schema({
    id: {
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
    iconLink: {
        type: String,
        required: true
    },
    hasThumbnail: {
        type: Boolean,
        required: true
    },
    createdTime: {
        type: String,
        required: true
    },
    modifiedTime: {
        type: String,
        required: true
    },
    etiquetas: {
        type: Array,
        required: false
    },
    fileExtension: {
        type: String,
        required: false
    },
    thumbnailLink: {
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
    },
    durationMillis: {
        type: Number,
        required: false
    }
});


ArchivoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Archivo', ArchivoSchema );
