import React from 'react'
export default function Navbar() {
    return<nav className="navbar">
        <ul className="navbar">
            <li><a href="/">Home</a></li>
            <li><a href="/search">Search Playgrounds</a></li>
            <li><a href="/map">Playground Map</a></li>
            <li><a href="/directory">Directory & Reviews</a></li>
            {/* <li><a href="/books">Books</a></li> */}
            <li><a href="/resources">Resources</a></li>
            <li><a href="/submit">Submit a Playground</a></li>
        </ul>
    </nav>
}