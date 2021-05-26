// const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
// const getCoordsForAddress = require('../util/location');
const Listing = require('../models/listing');

// const getPlaceById = (req, res, next) => {
//   const placeId = req.params.pid; // { pid: 'p1' }

//   const place = DUMMY_PLACES.find(p => {
//     return p.id === placeId;
//   });

//   if (!place) {
//     throw new HttpError('Could not find a place for the provided id.', 404);
//   }

//   res.json({ place }); // => { place } => { place: place }
// };

// function getPlaceById() { ... }
// const getPlaceById = function() { ... }

// const getPlacesByUserId = (req, res, next) => {
//   const userId = req.params.uid;

//   const places = DUMMY_PLACES.filter(p => {
//     return p.creator === userId;
//   });

//   if (!places || places.length === 0) {
//     return next(
//       new HttpError('Could not find places for the provided user id.', 404)
//     );
//   }

//   res.json({ places });
// };

const createListing = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { category, description, quantity, location } = req.body;

//   let coordinates;
//   try {
//     coordinates = await getCoordsForAddress(address);
//   } catch (error) {
//     return next(error);
//   }

  // const title = req.body.title;
  const createListing = new Listing ({
    category,
    description,
    // // image, 
    quantity,
    location,
    // userID
  });

  try{
    await createListing.save();
  } catch (err) { 
    error = new HttpError(
    err,
    500
  );
  return next(error);
};

  res.status(201).json({ listing: createListing });
};

// const updatePlace = (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     throw new HttpError('Invalid inputs passed, please check your data.', 422);
//   }

//   const { title, description } = req.body;
//   const placeId = req.params.pid;

//   const updatedPlace = { ...DUMMY_PLACES.find(p => p.id === placeId) };
//   const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeId);
//   updatedPlace.title = title;
//   updatedPlace.description = description;

//   DUMMY_PLACES[placeIndex] = updatedPlace;

//   res.status(200).json({ place: updatedPlace });
// };

// const deletePlace = (req, res, next) => {
//   const placeId = req.params.pid;
//   if (!DUMMY_PLACES.find(p => p.id === placeId)) {
//     throw new HttpError('Could not find a place for that id.', 404);
//   }
//   DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id !== placeId);
//   res.status(200).json({ message: 'Deleted place.' });
// };

// exports.getPlaceById = getPlaceById;
// exports.getPlacesByUserId = getPlacesByUserId;
exports.createListing = createListing;
// exports.updatePlace = updatePlace;
// exports.deletePlace = deletePlace;