import React from 'react'
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer>

          <div className="row">
            <div className="column">
            <img src="https://i.imgur.com/w1wuayu.png"></img>
          <img src="https://i.imgur.com/radlFWM.png"></img>
          </div>

          <div className="column">
            <a href="/about" className="footer-link">About Us</a>
            <br></br>
            <a href="/team" className="footer-link">Meet the Team</a>
            <br></br>
            <a href="/contactus" className="footer-link">Contact Us</a>
            <br></br>
            <a href="/submit" className="footer-link">Submit a Playground</a>
            <br></br>
            <a href="/resources" className="footer-link">Resources</a>
          </div>
          </div>

        </footer>
    )
}