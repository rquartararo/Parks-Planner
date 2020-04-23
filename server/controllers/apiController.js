const db = require('../models/database.js');
const utils = require('../utils/utils.js')
require('dotenv').config();

const npsController = {};



/* ---------------------------- Get All Park Data --------------------------- */
npsController.getParkData = (req, res, next) => {
  const query = `SELECT * FROM parks;`;

  db.query(query)
    .then((parksData) => {
      res.locals.parksData = utils.parkDataFormatter(parksData.rows);
      next();
    })
    .catch((err) => next('error in getPark middleware'));
};

/* --------------------------- Get One Park's Data -------------------------- */
npsController.getOnePark = (req, res, next) => {
  const parkCode = req.params.code

  const code = [parkCode]
  const query = `SELECT * FROM parks WHERE "parkCode" = $1`

  db.query(query, code)
  .then(parkData => {
    res.locals.parkData = parkData.rows
    next()
  })
};

module.exports = npsController;
