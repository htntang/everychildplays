import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Directory() {
  const [playgrounds, setPlaygrounds] = useState([]);
  const [selectedPlayground, setSelectedPlayground] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5005/api/playgrounds/").then((response) => {
      setPlaygrounds(response.data);
    });
  }, []);

  const handleOpen = (playground) => {
    setSelectedPlayground(playground);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h1>Directory & Reviews</h1>

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
                  <Button>Add Review</Button>
                  <Button size="small" onClick={() => handleOpen(playground)}>
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <Dialog open={open} onClose={handleClose}>
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
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
