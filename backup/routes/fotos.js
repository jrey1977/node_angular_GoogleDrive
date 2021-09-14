var express = require('express');
var router = express.Router();

const { getFotos } = require('../controllers/fotos');

/* GET home page. */
router.get('/', getFotos);

module.exports = router;