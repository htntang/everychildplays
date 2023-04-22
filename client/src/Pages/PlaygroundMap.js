import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import PlaygroundMarker from '../assets/inclusive-playground-marker.svg';

function PlaygroundMap() {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaW5jbHVzaXZlcGxheXdvcmtzIiwiYSI6ImNsZ291NTlnZjBsYmQzZ2tjdGtqaWJsa3oifQ.XL2r23iiSDVExpHNlTxG0g';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/inclusiveplayworks/clgsh6lgj000z01q1apkg1ft1',
      center: [-114.0708, 51.0486],
      zoom: 10,
    });


    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '85vh', width: '75vw', display: 'flex', justifyContent: 'grow', alignItems: 'center' }} />;
}

export default PlaygroundMap;
