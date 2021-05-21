var express = require('express');
var router = express.Router();

// const mongoose = require('mongoose'); UPDATE for REJIJI
// saved a copy of users to models for seeding the DB with JSON
const User = require('../models/user');

/* List all users in REJIJI. */
router.get('/', async (req, res, next) => {
  let data = await User.find({}); //Update for REJIJI
  // using mongoose up a level in the mongoDB and create a schema
  console.info(`records retrieved from mongoose:`, data?.length)
  res.send(data);
});

module.exports = router;
