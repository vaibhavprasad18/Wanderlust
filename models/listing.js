const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  image: {
    type: String,
    default:
      " https://unsplash.com/photos/forest-and-mountains-under-a-cloudy-sky-ytuKdznHkWc",
    set: (v) =>
      v === ""
        ? " https://unsplash.com/photos/forest-and-mountains-under-a-cloudy-sky-ytuKdznHkWc"
        : v,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
