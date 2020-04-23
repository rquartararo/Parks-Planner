const express = require('express');
const apiController = require('../controllers/apiController.js');
const router = express.Router();

// connects with SQL database to serve client/front-end
// res is array of objects with name, parkCode, lat, and long

router.get('/getparks', apiController.getParkData, (req, res) => {
  res.status(200).json(res.locals.parksData);
});

// onclick on client side request for single park info
router.get('/getparks/:code', apiController.getOnePark, (req, res) => {
  res.status(200).json(res.locals.parkData);
});

module.exports = router;
