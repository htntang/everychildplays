import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "react-rating-stars-component";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ReviewPopup from "../Components/ReviewPopup";
import ReadMorePopup from "../Components/ReadMorePopup";

export default function Directory() {
  const [playgrounds, setPlaygrounds] = useState([]);
  const [selectedPlayground, setSelectedPlayground] = useState(null);
  const [reviewPopupOpen, setReviewPopupOpen] = useState(false);
  const [readMorePopupOpen, setReadMorePopupOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5005/api/playgrounds/").then((response) => {
      setPlaygrounds(response.data);
    });
  }, []);

  const handleReviewSubmit = (formData) => {
    const { rating, comment } = formData;
    axios
      .post(
        `http://localhost:5005/api/playgrounds/${selectedPlayground._id}/reviews/create`,
        {
          rating,
          comment,
        }
      )
      .then(() => {
        setReviewPopupOpen(false);
        setSelectedPlayground(null);
      })
      .catch((err) => console.log(err));
  };

  const handleReadMoreClick = (playground) => {
    setSelectedPlayground(playground);
    setReadMorePopupOpen(true);
  };

  return (
    <>
      <h1>Directory & Reviews</h1>

      <div className="reviews" style={{ padding: 30 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {playgrounds.map((playground) => (
            <Grid item xs={4} key={playground.name}>
              <Card style={{ maxWidth: 335, backgroundColor: "#DD6E42" }}>
                <CardMedia
                  style={{ height: 140 }}
                  image={playground.pictures[0]}
                  title="inclusive-park"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="#fffff0"
                    fontFamily="sans-serif"
                  >
                    <b>{playground.name}</b>
                  </Typography>
                  <Typography variant="body2" color="#fffff0">
                    <i>{playground.location}</i>
                    <br />
                    <br />
                    {playground.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      setSelectedPlayground(playground);
                      setReviewPopupOpen(true);
                    }}
                  >
                    Add Review
                  </Button>
                  <Button
                    size="small"
                    onClick={() => handleReadMoreClick(playground)}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      {reviewPopupOpen && (
        <ReviewPopup
          open={reviewPopupOpen}
          handleClose={() => setReviewPopupOpen(false)}
          handleReviewSubmit={handleReviewSubmit}
          playground={selectedPlayground}
        />
      )}
      {readMorePopupOpen && (
        <ReadMorePopup
          open={readMorePopupOpen}
          handleClose={() => setReadMorePopupOpen(false)}
          playground={selectedPlayground}
        />
      )}
    </>
  );
}


//       axios.get("http://localhost:5005/api/playgrounds/").then((response) => {
//         setPlaygrounds(response.data);
//       });
//     }, []);
  
//     return (
//       <>
//         <h1>Directory & Reviews</h1>
  
//         <div className="reviews" style={{ padding: 30 }}>
//           <Grid container spacing={2} justifyContent="center" alignItems="center">
//             {playgrounds.map((playground) => (
//               <Grid item xs={4} key={playground.name}>
//                 <Card style={{ maxWidth: 335, backgroundColor: "#DD6E42" }}>
//                   <CardMedia style={{ height: 140 }}
//                     image={playground.pictures[0]}
//                     title="inclusive-park"
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="div" color="#fffff0" fontFamily="sans-serif">
//                       <b>{playground.name}</b>
//                     </Typography>
//                     <Typography variant="body2" color="#fffff0">
//                       <i>{playground.location}</i>
//                       <br />
//                       <br />
//                       {playground.description}
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">Add Review</Button>
//                     <Button size="small">Read More</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </div>
//       </>
//     );
//   }

