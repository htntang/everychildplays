import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const PlaygroundMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-114.0571411);
  const [lat, setLat] = useState(51.0453775);
  const [zoom, setZoom] = useState(10);


  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiaHRudGFuZyIsImEiOiJjbGduNmNibGYwNTE5M3Bwb3N1bHFvMmY2In0.6MozJ5eRM-X3CXnMJSqBnA"
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/ollysamm/clgmqv6wz001f01pl6kx5gu1y",
      center: [-114.0708, 51.0486],
      zoom: 10
    });

      // add geolocation
    .addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
        showUserLocation: true,
      })
    )
      //add navigation control
    // .addControl(new mapboxgl.NavigationControl())
    // .addControl(
    //   new MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken,
    //     mapboxgl: mapboxgl,
    //     showSearch: false,
    //   }),
    //   "top-left"
    // )

      //add directions
    .addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: "metric",
        profile: "mapbox/walking, mapbox/driving",
      }),
      "top-left"
    );

      // add playground location markers
    async function fetchPlaygrounds() {
      try {
        const response = await axios.get(
          "http://localhost:5005/api/playgrounds"
        );
        const playgrounds = response.data;

        playgrounds.forEach((playground) => {
          const markerElement = document.createElement("div");
          markerElement.classList.add("playground-marker");

          new mapboxgl.Marker({
            element: markerElement,
            color: "#3FB1CE",
            draggable: false,
            anchor: "top-right",
          })
            .setLngLat([playground.longitude, playground.latitude])
            .setPopup(
              new mapboxgl.Popup({ offset: 15 }).setHTML(
                `<div style="color: black; background-color: rgba(0, 0, 0, 0);"><img src="${playground.pictures}" alt="${playground.name}" /><h3>${playground.name}</h3><p>${playground.location}</p></div>`
              )
            )
            .addTo(map.current)
        });
      } catch (error) {
        console.error(error);
      }
    }

    fetchPlaygrounds();
    
  }, []);

  return <div ref={mapContainer} style={{ height: "90vh" }} />;
};

export default PlaygroundMap;
