const  express = require('express');

const router = express.Router();
const controller = require('../controllers/report.controller');

router.get('/', controller.index); // Hien thi tat ca database duoi dang json.

router.post('/', controller.create); // Them moi vao database.

module.exports = router;