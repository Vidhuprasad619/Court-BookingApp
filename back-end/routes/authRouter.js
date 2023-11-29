const express = require('express');
const { doSignup, doLogin } = require('../controllers/auth');
const router = express.Router();



router.post('/register',doSignup);
router.post('/login',doLogin);


module.exports = router;