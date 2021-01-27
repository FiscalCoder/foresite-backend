var express = require('express');
var router = express.Router();

var register_controller = require('../controllers/registerController');

router.post('/addUser', register_controller.addUser);


module.exports = router;