import express from 'express';
import { createReview, 
        getAllReviews, 
        getReviewByPlayground,
        updateReview, 
        deleteReview } from '../controllers/reviewController.js';

const reviewRouter = express.Router();

// Create a new review
reviewRouter.post('/create', createReview);

// Get all reviews for a playgorund
reviewRouter.get('/', getAllReviews);

// Get all reviews for a playgorund
reviewRouter.get('/playgrounds/:playgroundId/reviews', getReviewByPlayground);

// Update a review by ID
reviewRouter.patch('/:id', updateReview);

// Delete a review by ID
reviewRouter.delete('/:id', deleteReview);

export default reviewRouter;
