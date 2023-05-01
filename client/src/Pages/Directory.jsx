import { Card, CardActions, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";

import ReviewPopup from "../Components/ReviewPopup";
import ReadMorePopup from "../Components/ReadMorePopup";

export default function Directory() {
  const [playgrounds, setPlaygrounds] = useState([]);
  const [selectedPlayground, setSelectedPlayground] = useState(null);

  const [openAddReview, setOpenAddReview] = useState(false);

  const [openReadMore, setOpenReadMore] = useState(false);
  const [getReviews, setGetReviews] = useState([]);


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

  // Read more functionality
  const handleReadMoreOpen = async (playground) => {
    setSelectedPlayground(playground);

    try {
      const response = await axios.get(`http://localhost:5005/api/playgrounds/${playground._id}/reviews`);
      setGetReviews(response.data);
    } catch (error) {
      console.error(error);
    }

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

      <ReviewPopup selectedPlayground={selectedPlayground} handleAddReviewClose={handleAddReviewClose} openAddReview={openAddReview} />

      <ReadMorePopup selectedPlayground={selectedPlayground} handleReadMoreClose={handleReadMoreClose} openReadMore={openReadMore} getReviews={getReviews} />
      
    </>
  );
}
