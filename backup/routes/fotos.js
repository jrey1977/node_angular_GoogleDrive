var express = require('express');
var router = express.Router();

const { getTest, getFotos } = require('../controllers/fotos');

/* GET home page. */
router.get('/', getTest);

module.exports = router;