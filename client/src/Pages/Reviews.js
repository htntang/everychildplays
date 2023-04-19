import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Reviews() {
    return(
        <>
        <h1>Recent Reviews</h1>
        
        <body>
        <Card style={{maxWidth: 345, backgroundColor:"#AEC595"}}>
        
        <CardMedia style={{ height: 140 }}
        image="https://library.playlsi.com/transform/71b01b2d-7456-4df0-b763-a8343de1ce68/Canada-Shouldice-Park-Jumpstart-60-jpg?io=transform:extend,width:1920,height:1080,background:f9f9f9"
        title="shouldice-park"
        />

        <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fffff0" font-family="Impact">
                <b>Shouldice Park</b>
            </Typography>
            <Typography variant="body2" color="#fffff0">
            The Shouldice Park playground is inclusive, fully accessible with a soft floor, easy ramp access, lots of slides, climbing structures, swings, and playful setups. It’s recommended for kids in the 2-12 age range.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>

        </body>

        </>

    );
}