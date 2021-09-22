const { response } = require('express');

const Foto = require('../models/foto');
const Video = require('../models/video');

const getFiles = async(req, res=response) => {

    const fotos = await Foto.find({});
    const videos = await Video.find({});

    // TODO COMBINAR RESULTADO DE FOTOS Y VIDEOS Y DEVOLVERLO

}