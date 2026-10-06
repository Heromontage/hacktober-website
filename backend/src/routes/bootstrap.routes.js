const express = require('express');
const auth = require('../middleware/auth.middleware');
const controller = require('../controllers/bootstrap.controller');

const router = express.Router();

router.post('/admin', auth, controller.makeAdmin);

module.exports = router;