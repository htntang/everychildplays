import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context object
export const AppContext = createContext();

// Create the provider component
export const AppProvider = ({ children }) => {
  // State variables to hold the user data and playground data
  const [user, setUser] = useState(null);
  const [playgrounds, setPlaygrounds] = useState([]);

  // Function to get the user data from localStorage
  const getUserData = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      setUser(payload.username);
    }
  };

  // Function to get the playground data from the backend API
  const getPlaygrounds = async () => {
    try {
      const response = await axios.get('http://localhost:5005/api/playgrounds/');
      setPlaygrounds(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Call the getUserData and getPlaygrounds functions on component mount
  useEffect(() => {
    getUserData();
    getPlaygrounds();
  }, []);

  // The data that will be shared with other components
  const appData = { user, setUser, playgrounds, setPlaygrounds };

  return (
    <AppContext.Provider value={appData}>
      {children}
    </AppContext.Provider>
  );
};
