var express = require('express');
const { check } = require('express-validator');

const usersControllers = require('../controllers/users-controllers');

const router = express.Router();

const User = require('../models/user');

router.post(
  '/', usersControllers.createUser
);

// router.get('/', async (req, res, next) => {
//   let data = await User.find({}); //Update for REJIJI
//   // using mongoose up a level in the mongoDB and create a schema
//   console.info(`records retrieved from mongoose:`, data?.length)
//   res.send(data);
// });

module.exports = router;
