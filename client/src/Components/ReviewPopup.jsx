import { Card, CardActions, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button, TextField } from "@mui/material";
import Rating from "react-rating-stars-component";
import ReactStars from "react-rating-stars-component";
import React, { useState, useEffect } from "react";
import axios from "axios";


export default function ReviewPopup(props) {
  const handleAddReviewClose = props.handleAddReviewClose
  const selectedPlayground = props.selectedPlayground
  const openAddReview = props.openAddReview

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  let username = "";
  const token = localStorage.getItem("token");
  if (token) {
    const payload = token.split(".")[1];
    const decodedPayload = atob(payload);
    const { username: decodedUsername } = JSON.parse(decodedPayload);
    username = decodedUsername;
  }


  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitClick = () => {
    if (localStorage.getItem("token")) {
        if (rating > 0 && comment !== "") {
          const review = {
            username: username,
            playgroundId: selectedPlayground._id,
            rating: rating,
            comment: comment,
          };
          axios
            .post("http://localhost:5005/api/reviews/create", review)
            .then((response) => {
              handleAddReviewClose();
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

    } else {
      alert("Please log in to submit a review.")
    }
  };


return (
  <Dialog open={openAddReview} onClose={handleAddReviewClose}>
        <DialogTitle>Add a review for {selectedPlayground && selectedPlayground.name}</DialogTitle>
        <DialogContent>
        <Rating
          count={5}
          size={48}
          activeColor="#ffd700"
          isHalf={false}
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
          <Button onClick={handleAddReviewClose}>Close</Button>
          <Button onClick={handleSubmitClick}>Submit</Button>
        </DialogActions>
      </Dialog>
)
}