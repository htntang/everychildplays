import React, { useState } from "react";
import Rating from "react-rating-stars-component";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import axios from "axios";

const ReviewPopup = ({ open, handleClose, playground }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitClick = () => {
    if (rating > 0 && comment !== "") {
      const review = {
        //playground_id: playground,
        rating: rating,
        comment: comment,
      };
      axios
        .post("http://localhost:5005/api/reviews/create", review)
        .then((response) => {
          handleClose();
          setRating(0);
          setComment("");
          alert("Review submitted successfully");
        })
        .catch((error) => {
          alert("An error occurred while submitting the review");
        });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Review</DialogTitle>
      <DialogContent>
        <Rating
          count={5}
          size={48}
          activeColor="#ffd700"
          isHalf={true}
          value={rating}
          onChange={handleRatingChange}
        />
        <br />
        <br />
        <TextField
          id="comment"
          label="Comment"
          multiline
          rows={4}
          fullWidth
          value={comment}
          onChange={handleCommentChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmitClick}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewPopup;
