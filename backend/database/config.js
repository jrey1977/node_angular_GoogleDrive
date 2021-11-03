const mongoose = require('mongoose');


const dbConnection = async( req, res) => {

    try {
        await mongoose.connect( process.env.MONGODB_URL );

        console.log('DB Online');

        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }


}


module.exports = {
    dbConnection
}