import React, {useState} from "react";
import ReactMapGL from "react-map-gl";

export default function PlaygroundMap(){
    const [viewport, setViewport] = useState({
        latitude: 51.04539489746094,
        longitude: -114.05809020996094,
        width: '100vw',
        height: '100vh',
        zoom: 10,
    });

    return (
    <div>
        <ReactMapGL
        {...viewport}
        mapboxAccessToken="pk.eyJ1IjoiaHRudGFuZyIsImEiOiJjbGdsMjlhZDIwMDdnM2dxZ251eGY0MzBuIn0.RW4soJnBYI-87kzp-BUGzA" 
        />
    </div>
    );
}