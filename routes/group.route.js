var express = require('express');

var router = express.Router();
var controller = require('../controllers/group.controller');

router.get('/', controller.index);

router.get('/create', controller.create);

// router.get('/:id', controller.index);

// router.post('/', controller.create);

router.get('/:id/delete', controller.delete);

router.get('/:id/update', controller.update);

module.exports = router;