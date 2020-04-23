const db = require('../models/database.js');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const userController = {};

/* ------------------------------ Sign Up User ------------------------------ */
userController.signUp = async (req, res, next) => {
  let { username, password } = req.body;

  // Encrypt password before storing it in the DB
  password = await bcrypt.hash(password, SALT_ROUNDS).catch((err) =>
    next({
      log: 'ERROR in Bycrpt userController.signup',
      msg: err,
    })
  );

  // Cleansing client input to guard against SQL Injection
  const user = [username, password];
  const query = `INSERT INTO users (username, password) VALUES($1, $2);`;

  // Executing query and adding user to the DB
  db.query(query, user)
    .then(() => next())
    .catch((err) =>
      next({
        log: 'ERROR in userController.signup',
        msg: err.detail,
      })
    );
};

/* ------------------------------- Login User ------------------------------- */
userController.login = (req, res, next) => {
  let { username, password } = req.body;

  const user = [username];
  const query = `SELECT * FROM users WHERE username = $1;`;

  db.query(query, user)
    .then(async (user) => {
      const hash = user.rows[0].password;
      const result = await bcrypt.compare(password, hash);
      if (result) {
        const { _id, username } = user.rows[0];
        res.locals.user = { _id: _id, username: username };
        next();
      }
      // if authenticaiton fails, send back 401 status
      if (!result) res.status(401).send('Authentication failed');
    })
    .catch((err) =>
      next({
        log: 'ERROR in userController.login',
        msg: err.detail,
      })
    );
};

/* --------------------------- Populate User Data --------------------------- */
userController.getData = (req, res, next) => {
  const { _id } = res.locals.user;
  
};

/* ---------------------------- Update Favorites ---------------------------- */
userController.updateFavorites = (req, res, next) => {
  const { _id, parkCode } = req.body;

  const user = [_id, parkCode];
  const query = `INSERT INTO favorites (user_id, park_id) VALUES ($1, $2)`;

  db.query(query, user)
    .then(() => next())
    .catch((err) =>
      next({
        log: 'ERROR in userController.updateFavorites',
        msg: err.detail,
      })
    );
};

module.exports = userController;
