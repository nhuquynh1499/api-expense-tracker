var express = require('express');

var router = express.Router();
var controller = require('../controllers/transaction.controller');

router.get('/', controller.index);

router.get('/:id/delete', controller.delete);

// router.post('/', controller.create);

module.exports = router;