const { Schema, model } = require('mongoose');

const VideoSchema = Schema({
    createdTime: {
        type: String,
        required: true
    },
    fileExtension: {
        type: String,
        required: true
    },
    idVideo: {
        type: String,
        required: true
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
    iconLink: {
        type: String,
        required: true
    },
    hasThumbnail: {
        type: Boolean,
        required: true
    },
    etiquetas: {
        type: Array,
        required: false
    }
});


VideoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Video', VideoSchema );
