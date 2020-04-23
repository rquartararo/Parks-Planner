const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();

// Creates user account, hashing password with Bcrypt
router.post('/signup', userController.signUp, userController.getData, (req, res) => {
  res.status(200).json(res.locals.user)
});

// Verifies user at login
router.post('/login', userController.login, userController.getData, (req, res) =>
res.status(200).json(res.locals.user)
);

// Adds a favorite park to the user's profile
router.post('/favorite', userController.updateFavorites, userController.getData, (req, res) => {
  res.status(200).json(res.locals.user)
} )

module.exports = router;