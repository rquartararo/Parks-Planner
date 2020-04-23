const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();

router.post('/signup', userController.signUp, (req, res) => {
  res.status(200).json(res.locals.user)
});

router.post('/login', userController.login, (req, res) =>
res.status(200).json(res.locals.user)
);

router.post('/favorite', userController.updateFavorites, (req, res) => {
  res.status(200).json('success')
} )

module.exports = router;