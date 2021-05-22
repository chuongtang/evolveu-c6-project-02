require("./db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    category: String,
    description: String,
    quantity: String,
    location: String,
    picture: String,
    userID: String
});

module.exports = mongoose.model("Listing", listingSchema, "listing");