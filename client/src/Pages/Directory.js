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
        <h1>Directory & Reviews</h1>
        
        <div className="reviews" style={{ padding: 30 }}>

            <Grid container spacing={2}
            justifyContent="center"
            alignItems="center"
            >

        <Grid item xs={4}>
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
                Edworthy Park features western-themed playground that includes accessible tandem swings, ramps, braille signage, accessible rocking wagon, musical instruments
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Add Review</Button>
            <Button size="small">Read More</Button>
        </CardActions>
        </Card>
        </Grid>

        <Grid item xs={4}>
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
                Elliston Park features playground that includes a zip line, accessible swings , climbers, ramps, musical instruments.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Add Review</Button>
            <Button size="small">Read More</Button>
        </CardActions>
        </Card>
        </Grid>

        <Grid item xs={4}>
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
            <Button size="small">Add Review</Button>
            <Button size="small">Read More</Button>
        </CardActions>
        </Card>
        </Grid>
        </Grid>

        <br></br>
        <br></br>

        <Grid container spacing={2}
            justifyContent="center"
            alignItems="center"
            >
        <Grid item xs={4}>
        <Card style={{maxWidth: 345, backgroundColor:"#AEC595"}}>
        <CardMedia style={{ height: 140 }}
        image="https://calgaryplaygroundreview.com/wp-content/uploads/2021/07/IMG_6213-700x525.jpg"
        title="inclusive-park"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fffff0" font-family="Impact">
                <b>Hidden Hut Park</b>
            </Typography>
            <Typography variant="body2" color="#fffff0">
                <i>10504 Hidden Valley Dr NW</i>
                <br></br>
                <br></br>
                Hidden Hut features playground that includes ramps, saucer swing, accessible spring teeter, mobility.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Add Review</Button>
            <Button size="small">Read More</Button>
        </CardActions>
        </Card>
        </Grid>

        <Grid item xs={4}>
        <Card style={{maxWidth: 345, backgroundColor:"#AEC595"}}>
        <CardMedia style={{ height: 140 }}
        image="https://travelwiththesmile.com/wp-content/uploads/2022/07/South-Glenmore-Variety-Park-Playground-Splash-Park-8.jpg"
        title="inclusive-park"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fffff0" font-family="Impact">
                <b>South Glenmore Park</b>
            </Typography>
            <Typography variant="body2" color="#fffff0">
                <i>8415 24 St Southwest</i>
                <br></br>
                <br></br>
                South Glenmore Park features playground that includes a waterpark, ramps, enclosure area, musical instruments, roller slides.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Add Review</Button>
            <Button size="small">Read More</Button>
        </CardActions>
        </Card>
        </Grid>

        <Grid item xs={4}>
        <Card style={{maxWidth: 345, backgroundColor:"#AEC595"}}>
        <CardMedia style={{ height: 140 }}
        image="https://travelwiththesmile.com/wp-content/uploads/2022/07/North-Glenmore-Park-Inclusive-Playground-15.jpg"
        title="inclusive-park"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fffff0" font-family="Impact">
                <b>North Glenmore Park</b>
            </Typography>
            <Typography variant="body2" color="#fffff0">
                <i>4900 Monserrat Dr. Northwest</i>
                <br></br>
                <br></br>
                The Shouldice Park playground is inclusive, fully accessible with a soft floor, easy ramp access, lots of slides, climbing structures, swings, and playful setups. It’s recommended for kids in the 2-12 age range.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Add Review</Button>
            <Button size="small">Read More</Button>
        </CardActions>
        </Card>
        </Grid>
        </Grid>

        <br></br>
        <br></br>

        <Grid container spacing={2}
            justifyContent="center"
            alignItems="center"
            >
        <Grid item xs={4}>
        <Card style={{maxWidth: 345, backgroundColor:"#AEC595"}}>
        <CardMedia style={{ height: 140 }}
        image="https://images.squarespace-cdn.com/content/v1/55ba3732e4b01221ab108979/42a67742-764a-4d8e-a585-753ea1ae4aa7/Ramsay_2.jpg?format=1500w"
        title="inclusive-park"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fffff0" font-family="Impact">
                <b>Ramsay Inclusive Park</b>
            </Typography>
            <Typography variant="body2" color="#fffff0">
                <i>Macdonald Ave SE & Bellevue Ave SE</i>
                <br></br>
                <br></br>
                Ramsay Inclusive Playground features two-tiered playground featuring fully accessible spinner, ramps, slides, climbers.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Add Review</Button>
            <Button size="small">Read More</Button>
        </CardActions>
        </Card>
        </Grid>

        <Grid item xs={4}>
        <Card style={{maxWidth: 345, backgroundColor:"#AEC595"}}>
        <CardMedia style={{ height: 140 }}
        image="https://calgaryplaygroundreview.com/wp-content/uploads/2022/06/IMG_8875.jpg"
        title="inclusive-park"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fffff0" font-family="Impact">
                <b>Sandy Beach Park</b>
            </Typography>
            <Typography variant="body2" color="#fffff0">
                <i>4500 14A St. SW</i>
                <br></br>
                <br></br>
                Sandy Beach features tandem swings, ramps, musical instruments.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Add Review</Button>
            <Button size="small">Read More</Button>
        </CardActions>
        </Card>
        </Grid>

        <Grid item xs={4}>
        <Card style={{maxWidth: 345, backgroundColor:"#AEC595"}}>
        <CardMedia style={{ height: 140 }}
        image="https://calgaryplaygroundreview.com/wp-content/uploads/2022/07/IMG_9739.jpg"
        title="inclusive-park"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fffff0" font-family="Impact">
                <b>Somerset Park</b>
            </Typography>
            <Typography variant="body2" color="#fffff0">
                <i>999 Somerset Square SW</i>
                <br></br>
                <br></br>
                Somerset features fully accessible merry-go-round, fully accessible rocking raft , saucer swing, rope climbers, ramps.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Add Review</Button>
            <Button size="small">Read More</Button>
        </CardActions>
        </Card>
        </Grid>
        </Grid>

        <br></br>
        <br></br>

        <Grid container spacing={2}
            justifyContent="center"
            alignItems="center"
            >
        <Grid item xs={4}>
        <Card style={{maxWidth: 345, backgroundColor:"#AEC595"}}>
        <CardMedia style={{ height: 140 }}
        image="https://images.squarespace-cdn.com/content/v1/55ba3732e4b01221ab108979/1635535494710-AQUEXZGGBIYA8TMB2Q7L/Ted+Harrison+3.jpg?format=2500w"
        title="inclusive-park"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fffff0" font-family="Impact">
                <b>Ted Harrison Park</b>
            </Typography>
            <Typography variant="body2" color="#fffff0">
                <i>Taralake Way NE & Taradale Dr NE</i>
                <br></br>
                <br></br>
                Ted Harrison features accessible swings, accessible rocker, rope climber, ramps.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Add Review</Button>
            <Button size="small">Read More</Button>
        </CardActions>
        </Card>
        </Grid>

        <Grid item xs={4}>
        <Card style={{maxWidth: 345, backgroundColor:"#AEC595"}}>
        <CardMedia style={{ height: 140 }}
        image="https://calgaryplaygroundreview.com/wp-content/uploads/2022/05/IMG_8760.jpg"
        title="inclusive-park"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fffff0" font-family="Impact">
                <b>Vivo Inclusive Park</b>
            </Typography>
            <Typography variant="body2" color="#fffff0">
                <i>Country Village Rd NE & Country Village Way NE</i>
                <br></br>
                <br></br>
                Vivo features fenced playground including fully accessible sway ride, accessible swings, saucer swings, musical instruments, roller slide.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Add Review</Button>
            <Button size="small">Read More</Button>
        </CardActions>
        </Card>
        </Grid>

        <Grid item xs={4}>
        <Card style={{maxWidth: 345, backgroundColor:"#AEC595"}}>
        <CardMedia style={{ height: 140 }}
        image="https://calgaryplaygroundreview.com/wp-content/uploads/2021/04/IMG_4498-700x525.jpg"
        title="inclusive-park"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fffff0" font-family="Impact">
                <b>Thorncliffe Greenview</b>
            </Typography>
            <Typography variant="body2" color="#fffff0">
                <i>4900 Monserrat Dr. Northwest</i>
                <br></br>
                <br></br>
                This awesome new inclusive playground has accessible flooring throughout and includes two different tandem swings and a double zipline!
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Add Review</Button>
            <Button size="small">Read More</Button>
        </CardActions>
        </Card>
        </Grid>

        </Grid>

        </div>
        
        </>

    );
}


