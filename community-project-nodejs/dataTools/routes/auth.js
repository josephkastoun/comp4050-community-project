const express = require('express');
const router = express.Router();

const { register, login, logout, requireLogin } = require('../controllers/auth');
const { userRegisterValidator } = require('../validator/index');

router.post('/register', userRegisterValidator, register);
router.post('/login', login);
router.get('/logout', logout);


/*
router.get('/hello', requireLogin, (req,res) => {
    res.send('hello there');
});
*/

module.exports = router;