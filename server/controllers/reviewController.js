import Review from '../models/reviewModel.js';
import Playground from '../models/playgroundModel.js';

// Add a new review
const createReview = async (req, res) => {
  try {
    const { username, playgroundId, rating, comment } = req.body;
    const review = new Review({
      username,
      playground: playgroundId,
      rating,
      comment,
    });

    const savedReview = await review.save();

    // Add the review's ObjectId to the playground's reviews array
    const playground = await Playground.findById(playgroundId);
    playground.reviews.push(savedReview._id);
    await playground.save();

    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


// Get all Reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all reviews for a playground
const getReviewByPlayground = async (req, res) => {
  const playgroundId = req.params.playgroundId;

  try {
    const reviews = await Review.find({ playground: playgroundId }).populate(
      'user',
      'username'
    );

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a review
const updateReview = async (req, res) => {
  const { rating, comment } = req.body;
  const reviewId = req.params.reviewId;

  try {
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      {
        rating,
        comment,
      },
      { new: true }
    );

    res.json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a review
const deleteReview = async (req, res) => {
  const reviewId = req.params.reviewId;

  try {
    const deletedReview = await Review.findByIdAndDelete(reviewId);

    res.json(deletedReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createReview, 
        getAllReviews, 
        getReviewByPlayground,
        updateReview, 
        deleteReview };
