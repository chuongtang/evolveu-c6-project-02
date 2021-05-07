var express = require('express');
var router = express.Router();

// const mongoose = require('mongoose');
const Superhero = require('../models/Superhero');

/* List all superheroes. */
router.get('/', async (req, res, next) => {
  let data = await Superhero.find({});
  // using mongoose up a level in the mongoDB and create a schema
  console.info(`records retrieved from mongoose:`, data?.length)
  res.send(data);
});

module.exports = router;
