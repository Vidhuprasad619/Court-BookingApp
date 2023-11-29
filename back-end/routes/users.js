var express = require('express');
const { registerNewCourt } = require('../controllers/userController');
var router = express.Router();

router.post('/court-register',registerNewCourt);

module.exports = router;
