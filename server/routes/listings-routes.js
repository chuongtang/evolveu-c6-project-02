const express = require('express');
const { check } = require('express-validator');

const listingsControllers = require('../controllers/listings-controllers');

const router = express.Router();

router.post(
  '/', listingsControllers.createListing
);

// router.patch(
//   '/:pid',
//   [
//     check('title')
//       .not()
//       .isEmpty(),
//     check('description').isLength({ min: 5 })
//   ],
//   placesControllers.updatePlace
// );

// router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;
module.exports= router;

