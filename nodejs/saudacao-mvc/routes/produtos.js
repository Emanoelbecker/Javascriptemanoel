const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/', siteController.index);
router.get('/camisetas', siteController.camisetas);
//router.post('/saudacao', siteController.saudacao);

module.exports = router;
