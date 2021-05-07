var express = require('express');
var router = express.Router();

// const mongoose = require('mongoose'); UPDATE for REJIJI
const Superhero = require('../models/Superhero');

/* List all superheroes to REJIJI. */
router.get('/', async (req, res, next) => {
  let data = await Superhero.find({}); //Update for REJIJI
  // using mongoose up a level in the mongoDB and create a schema
  console.info(`records retrieved from mongoose:`, data?.length)
  res.send(data);
});

module.exports = router;
