const express = require('express');
const path = require('path');

const userRouter = require('./routes/userRouter')
const apiRouter = require('./routes/apiRouter');

const app = express();
const PORT = 3000;

/* --------------------------------- Parsers -------------------------------- */
app.use(express.json());

/* -------------------------- Serve Static Assets --------------------------- */
app.get('/build', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../build/bundle.js'))
});

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
});

/* --------------------------------- Routers -------------------------------- */
app.use('/user', userRouter);
app.use('/api', apiRouter);


/* -------------------------- Catch All 404 Handler ------------------------- */
app.use('/', (req, res) => res.sendStatus(404));

/* -------------------------- Global Error Handler -------------------------- */
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Something went wrong in an unknown piece of middleware',
    msg: 'ERROR: Global error handler'
  }
  err ? console.log(err) : console.log(defaultError)
  return res.status(400).send(err);
});

// Start server.
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
