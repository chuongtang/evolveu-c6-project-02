const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const User = require('../models/user');

const createUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }
  
    const { username, email, password } = req.body;

    const createUser = new User ({
       username,
       email,
       password,
    });
    
      try{
        await createUser.save();
      } catch (err) { 
        error = new HttpError(
        err,
        500
      );
      return next(error);
    };
    
      res.status(201).json({ user: createUser });
    };

exports.createUser = createUser;