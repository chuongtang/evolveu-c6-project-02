const express = require('express');
const { check } = require('express-validator');

const usersControllers = require('../controllers/users-controllers');

const router = express.Router();

// const User = require('../models/user');

// list all users
router.get('/', usersControllers.getUsers);


// async (req, res, next) => {
//   let data = await User.find({}); 
//   console.info(`records retrieved from mongoose:`, data?.length)
//   res.send(data);
// });

// create a user
router.post('/', usersControllers.signup);

// find a user by id
router.get('/:id', );


module.exports = router;
