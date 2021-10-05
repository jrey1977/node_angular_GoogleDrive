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

module.exports = {
    getFiles
}