import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Directory() {

    return(
        <>
        <h1>Recent Reviews</h1>
        
        <div className="reviews" style={{ padding: 30 }}>

            <Grid container spacing={2}
            justifyContent="center"
            alignItems="center"
            >

                <Grid xs={4}>
        <Card style={{maxWidth: 335, backgroundColor:"#AEC595"}}>
        <CardMedia style={{ height: 140 }}
        image="https://assets.website-files.com/601195401bde1d94d961140d/62950c49e0e2ce20582f7326_EdworthPark_MariahLeeStudios-7520.jpg"
        title="inclusive-park"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fffff0" font-family="Impact">
                <b>Edworthy Park</b>
            </Typography>
            <Typography variant="body2" color="#fffff0">
                <i>5050 Spruce Dr. Southwest</i>
                <br></br>
                <br></br>
                Bordered by the Bow River and the community of Wildwood, Edworthy Park is a large diverse park and is a great year-round destination. Edworthy Park includes the natural areas of Douglas Fir Trail and Lawrey Gardens.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Comment</Button>
            <Button size="small">Read More</Button>
        </CardActions>
        </Card>
        </Grid>

        <Grid xs={4}>
        <Card style={{maxWidth: 345, backgroundColor:"#AEC595"}}>
        <CardMedia style={{ height: 140 }}
        image="https://assets.website-files.com/601195401bde1d94d961140d/6173153760eae32064e861cc_Elliston%20Finished%20-%20still%20fenced%20(1)-min.JPG"
        title="inclusive-park"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fffff0" font-family="Impact">
                <b>Elliston Park</b>
            </Typography>
            <Typography variant="body2" color="#fffff0">
                <i>1827 68 St. Southeast</i>
                <br></br>
                <br></br>
                Elliston Park is located in the deep south east along 17th Avenue and contains a 20 hectare storm water retention pond. Elliston Park is the site of the annual Globalfest fireworks competition and home of the first BP BirthPlace Forest.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Comment</Button>
            <Button size="small">Read More</Button>
        </CardActions>
        </Card>
        </Grid>

        <Grid xs={4}>
        <Card style={{maxWidth: 345, backgroundColor:"#AEC595"}}>
        <CardMedia style={{ height: 140 }}
        image="https://www.calgaryadaptedhub.com/static/a380a9b1008c97af86a632b004ebd425/86361/blog_2-Playground-Project-min.jpg"
        title="inclusive-park"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fffff0" font-family="Impact">
                <b>Shouldice Park</b>
            </Typography>
            <Typography variant="body2" color="#fffff0">
                <i>4900 Monserrat Dr. Northwest</i>
                <br></br>
                <br></br>
                The Shouldice Park playground is inclusive, fully accessible with a soft floor, easy ramp access, lots of slides, climbing structures, swings, and playful setups. It’s recommended for kids in the 2-12 age range.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Comment</Button>
            <Button size="small">Read More</Button>
        </CardActions>
        </Card>
        </Grid>

        </Grid>

        </div>
        
        </>

    );
}