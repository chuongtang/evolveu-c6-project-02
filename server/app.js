const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// IMPORT ROUTES
const usersRoutes = require('./routes/users-routes');
const listingsRoutes = require('./routes/listings-routes');
const createError = require('./models/http-error');

const app = express();
app.use(bodyParser.json());  

// USE ROUTES
app.use('/api/users', usersRoutes);
app.use('/api/listings', listingsRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});



mongoose
.connect('mongodb+srv://rhaissa:rhai123@rejiji.cizim.mongodb.net/Rejiji?retryWrites=true&w=majority')
.catch(err => {
  console.log(err);
});



module.exports = app;