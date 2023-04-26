import React, { useState } from 'react';
import axios from 'axios';

const Submit = () => {
  const [parkData, setParkData] = useState({
    name: '',
    location: '',
    latitude: '',
    longitude: '',
    description: '',
    pictures: [],
    accessibilityFeatures: '',
    safetyFeatures: '',
    ageRange: '',
    reviews: [],
    neighbourhood: '',
    quadrant: '',
    moreInformation: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setParkData({ ...parkData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5005/api/playgrounds/create', parkData);
      setSuccess(true);
      setError('');
      setParkData({
        name: '',
        location: '',
        latitude: '',
        longitude: '',
        description: '',
        pictures: [],
        accessibilityFeatures: '',
        safetyFeatures: '',
        ageRange: '',
        reviews: [],
        neighbourhood: '',
        quadrant: '',
        moreInformation: '',
      });
    } catch (error) {
      setSuccess(false);
      setError('Error submitting playground. Please try again.');
    }
  };

    return (
        <div>
    <h2>Submit a Playground</h2>
    {error && <div style={{ color: 'red' }}>{error}</div>}
    {success && (
        <div style={{ color: 'green' }}>Playground Submitted, Thank you!</div>
    )}
    <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
        <input
        type="text"
        name="name"
        value={parkData.name}
        onChange={handleInputChange}
        required
        />
        <label htmlFor="location">Location</label>
        <input
        type="text"
        name="location"
        value={parkData.location}
        onChange={handleInputChange}
        required
        />
        <label htmlFor="latitude">Latitude</label>
        <input
        type="text"
        name="latitude"
        value={parkData.latitude}
        onChange={handleInputChange}
        required
        />
        <label htmlFor="longitude">Longitude</label>
        <input
        type="text"
        name="longitude"
        value={parkData.longitude}
        onChange={handleInputChange}
        required
        />
        <label htmlFor="description">Description</label>
        <input
        type="text"
        name="description"
        value={parkData.description}
        onChange={handleInputChange}
        required
        />
        <label htmlFor="pictures">Pictures</label>
        <input
        type="text"
        name="pictures"
        value={parkData.pictures}
        onChange={handleInputChange}
        />
        <label htmlFor="accessibilityFeatures">Accessibility Features</label>
        <input
        type="text"
        name="accessibilityFeatures"
        value={parkData.accessibilityFeatures}
        onChange={handleInputChange}
        />
        <label htmlFor="safetyFeatures">Safety Features</label>
        <input
        type="text"
        name="safetyFeatures"
        value={parkData.safetyFeatures}
        onChange={handleInputChange}
        />
        <label htmlFor="ageRange">Age Range</label>
        <input
        type="text"
        name="ageRange"
        value={parkData.ageRange}
        onChange={handleInputChange}
        />
        <label htmlFor="neighbourhood">Neighbourhood</label>
        <input
        type="text"
        name="neighbourhood"
        value={parkData.neighbourhood}
        onChange={handleInputChange}
        />
        <label htmlFor="quadrant">Quadrant</label>
        <input
        type="text"
        name="quadrant"
        value={parkData.quadrant}
        onChange={handleInputChange}
        />
        <label htmlFor="moreInformation">More Information</label>
        <input
        type="text"
        name="moreInformation"
        value={parkData.moreInformation}
        onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Submit;