import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button, TextField } from "@mui/material";
import ReactStars from "react-rating-stars-component";
import React from "react";

export default function ReadMorePopup(props) {
  const handleReadMoreClose = props.handleReadMoreClose
  const selectedPlayground = props.selectedPlayground
  const openReadMore = props.openReadMore
  const getReviews = props.getReviews

  return (
    <Dialog open={openReadMore} onClose={handleReadMoreClose}>
        <DialogTitle>{selectedPlayground && selectedPlayground.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <b>Location:</b> {selectedPlayground && selectedPlayground.location}
            <br />
            <br />
            <b>Description:</b> {selectedPlayground && selectedPlayground.description}
            <br />
            <br />
            <b>Accessibility Features:</b> {selectedPlayground && selectedPlayground.accessibilityFeatures}
            <br />
            <br />
            <b>Safety Features:</b> {selectedPlayground && selectedPlayground.safetyFeatures}
            <br />
            <br />
            <b>Reviews:</b>
            {getReviews.map((review) => (
              <div key={review._id}>
                <br />
                <b>{review.username}</b>
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  value={review.rating}
                  edit={false}
                />
                {review.comment}
              </div>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReadMoreClose}>Close</Button>
        </DialogActions>
      </Dialog>
  )
}
