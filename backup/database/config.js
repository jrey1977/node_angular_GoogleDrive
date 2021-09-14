const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        await mongoose.connect( process.env.MONGODB_URL );

        console.log('DB Online');

        const duplicado = ({
            "_id":{"$oid":"6133619121631892a8b87fff"},
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
            });
        
        const duplicadoDB = await duplicado.save().then(() => console.log('meow'));
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }


}


module.exports = {
    dbConnection
}