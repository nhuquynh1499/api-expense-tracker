const  express = require('express');

const router = express.Router();
const controller = require('../controllers/transaction.controller');

router.get('/', controller.index); // Hien thi tat ca database duoi dang json.

router.post('/', controller.create); // Them moi vao database.

module.exports = router;