const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();

router.post('/signup', userController.signUp, (req, res) => {
  res.status(200).json(res.locals.user)
});

router.get('/login', userController.verifyLoginUser, (req, res) =>
  res.status(200).json(res.locals.foundUser)
);

module.exports = router;