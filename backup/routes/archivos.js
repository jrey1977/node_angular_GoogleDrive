var express = require('express');
var router = express.Router();

const { getFiles } = require('../controllers/archivos');

/* GET home page. */
router.get('/', getFiles);

module.exports = router;