import { Card, CardActions, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button, TextField } from "@mui/material";
import Rating from "react-rating-stars-component";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Directory() {
  const [playgrounds, setPlaygrounds] = useState([]);
  const [selectedPlayground, setSelectedPlayground] = useState(null);

  const [openAddReview, setOpenAddReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const [openReadMore, setOpenReadMore] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5005/api/playgrounds/").then((response) => {
      setPlaygrounds(response.data);
    });
  }, []);


  // Add Review functionality
  const handleAddReview = (playground) => {
    setSelectedPlayground(playground);
    setOpenAddReview(true);
  };

  const handleAddReviewClose = () => {
    setOpenAddReview(false);
  };

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


  // Read more functionality
  const handleReadMoreOpen = (playground) => {
    setSelectedPlayground(playground);
    setOpenReadMore(true);
  };

  const handleReadMoreClose = () => {
    setOpenReadMore(false);
  };



  return (
    <>
      <h1>Playground Directory</h1>

      <div className="directory-container">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {playgrounds.map((playground) => (
            <Grid item xs={4} key={playground.name}>
              <Card style={{ maxWidth: 335, backgroundColor: "#DD6E42" }}>
                <CardMedia style={{ height: 140 }} image={playground.pictures[0]} title="inclusive-park" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="#fffff0" fontFamily="sans-serif">
                    <b>{playground.name}</b>
                  </Typography>
                  <Typography variant="body2" color="#fffff0">
                    <i>{playground.location}</i>      
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleAddReview(playground)}>Add Review</Button>
                  <Button size="small" onClick={() => handleReadMoreOpen(playground)}>
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>


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
            <b>Reviews:</b> {selectedPlayground && selectedPlayground.reviews}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReadMoreClose}>Close</Button>
        </DialogActions>
      </Dialog>


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
    </>
  );
}
