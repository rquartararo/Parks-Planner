const express = require('express');
const path = require('path');

const userController = require('./controllers/userController.js');
const npsController = require('./controllers/apiController.js');

const apiRouter = require('./routes/apiRouter');

const app = express();
const PORT = 3000;

/* --------------------------------- Parsers -------------------------------- */

app.use(express.json());

/* --------------------------------- Routers -------------------------------- */

app.use('/getparks', apiRouter);

/* ----------------------------- Signup & Login ----------------------------- */

app.get('/signup', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

// Handles POST request for signing up.
app.post(
  '/signup',
  // middleware for verify user
  userController.verifySignUpUser,
  userController.signUp,
  (req, res) => res.status(200).json(res.locals.user)
);

// GET/ login (NEED TO MAKE THIS ENDPOINT)
app.get('/login', userController.verifyLoginUser, (req, res) =>
  res.status(200).json(res.locals.foundUser)
);

// app.get('/getParksAPI', npsController.getParksAPI, (req, res) => {
//   res.status(200).json(res.locals.parks)
// })
app.get('/loadsql', npsController.loadSQL);
// ----------------------------------------------------------------------------

app.get('/build/bundle.js', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../build/bundle.js'))
);
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../index.html')));
app.get('/client/stylesheets/styles.css', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/stylesheets/styles.css'))
);

// Catch-all handler for unknown route.
app.use('/', (req, res) => res.sendStatus(404));

// Global error handler.
app.use('/', (err, req, res, next) => {
  let errorMessage = `you've found the global error handler`;
  if (err) errorMessage = err;

  console.log(err);
  return res.status(400).send(err);
});

// Start server.
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
