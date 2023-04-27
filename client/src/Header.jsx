import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  let username = "";
  const token = localStorage.getItem("token");
  if (token) {
    const payload = token.split(".")[1];
    const decodedPayload = atob(payload);
    const { username: decodedUsername } = JSON.parse(decodedPayload);
    username = decodedUsername;
  }

  return (
    <header>
      <Link to="/" className="logo">
        Inclusive Playworks™
        <h4>
          An <i>InceptionU</i> start-up seeking to ensure that every child
          plays!
        </h4>
      </Link>
      <nav>
        {isLoggedIn ? (
          <>
            <span className="welcome-message">
              Welcome {username}!
            </span>
            <br />
            <br />
            <button onClick={handleLogout} className="button-navigation">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="button-navigation">
              Login 
            </Link>
            <Link to="/register" className="button-navigation">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
