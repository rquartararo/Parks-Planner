const db = require('../models/database.js');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const userController = {};

/* ------------------------------ Sign Up User ------------------------------ */
userController.signUp = async (req, res, next) => {
  let { username, password } = req.body;

  password = await bcrypt.hash(password, SALT_ROUNDS)
  .catch((err) => next({
    log: 'ERROR in Bycrpt userController.signup',
    msg: err
  }))

  const user = [username, password];
  const query = `
    INSERT INTO users (username, password)
    VALUES($1, $2);`;

  db.query(query, user)
    .then(() =>  next())
    .catch((err) => next({
      log: 'ERROR in userController.signup',
      msg: err
    }));
};

userController.verifyLoginUser = (req, res, next) =>{
  const checkUser = 
  `SELECT * FROM users WHERE username = $1 and password = $2`
  
  const username = req.query.info[0]
  const password = req.query.info[1]
  const user = [username, password]


  db.query(checkUser, user)
    .then(userData => {
      if (userData.rows.length !== 0) {
        let foundData = userData.rows[0]
        res.locals.foundUser = foundData;
        next();
      } else { 
        return res.status(400).json("verifyLoginUser did not find existing username, dude")
      }
    })
    .catch((err)=> next("error in verifyLoginUser, dude"))
}


module.exports = userController;