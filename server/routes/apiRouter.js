const express = require('express');
const apiController = require('../controllers/apiController.js');
const router = express.Router();


// Retrieves all parks from the DB on initial page load
router.get('/getparks', apiController.getParkData, (req, res) => {
  res.status(200).json(res.locals.parksData);
});

// Get more information on a specific park
router.get('/getparks/:code', apiController.getOnePark, (req, res) => {
  res.status(200).json(res.locals.parkData);
});

module.exports = router;
