const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();

router.post('/signup', userController.signUp, userController.getData, (req, res) => {
  res.status(200).json(res.locals.user)
});

router.post('/login', userController.login, userController.getData, (req, res) =>
res.status(200).json(res.locals.user)
);

router.post('/favorite', userController.updateFavorites, userController.getData, (req, res) => {
  res.status(200).json(res.locals.user)
} )

module.exports = router;