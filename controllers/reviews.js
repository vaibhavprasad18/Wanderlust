const Listing = require('../models/listing');
const Review = require('../models/review');

//Post route
module.exports.createReview =async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
  req.flash("success", "Successfully added a new review!");
  console.log("new review saved");
  res.redirect(`/listings/${listing._id}`);
}

//Delete Route
module.exports.deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;
  const listing = await Listing.findById(id);
  listing.reviews.pull(reviewId);
  await listing.save();
  req.flash("success", "Successfully deleted the review!");
  res.redirect(`/listings/${listing._id}`);
};
