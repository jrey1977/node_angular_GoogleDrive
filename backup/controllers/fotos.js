const {google} = require('googleapis');

const getFotos = async(req,res) => {
    const service = google.drive('v3');
    const respuesta = await service.files.list({
      pageSize: 50,
      fields: 'nextPageToken, files',
    });
    const files = respuesta.data.files;
    /*let arrayFiles = [];
    if (files.length === 0) {
      console.log('No files found.');
    } else {
      console.log('Files:');
      for (const file of files) {
        console.log(`${file.name} (${file.id})`);
        arrayFiles.push(file.name);
      }
    }*/
    res.json({
        ok: true,
        files: files
    });
}

module.exports = {
    getFotos
}