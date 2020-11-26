const express = require('express');
const controller = require('../controllers/auth.controller');
// const validate = require('../validate/auth.validate');

const router = express.Router();

router.get("/", controller.login);

router.post("/", controller.postLogin);

module.exports = router;