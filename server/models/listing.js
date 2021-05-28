// require("./db");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    quantity: { type: Number, required: true },
    location: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' }
    
});

module.exports = mongoose.model("Listing", listingSchema, 'listing');