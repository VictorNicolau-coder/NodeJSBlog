const controllers = require('../controllers/admControllers')

const express = require('express');

const router =  express.Router();

router.get('/admin', controllers.login);
router.post('/admin', controllers.searchLogin);

module.exports = router;