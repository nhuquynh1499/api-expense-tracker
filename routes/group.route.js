var express = require('express');

var router = express.Router();
var controller = require('../controllers/group.controller');

router.get('/', controller.index);

// router.get('/:id', controller.index);

// router.post('/', controller.create);

module.exports = router;