import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  playground: {
    type: String,
  },
  rating: {
    type: Number,
  },
  comment: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
