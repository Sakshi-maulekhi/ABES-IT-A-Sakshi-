import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
                <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>

            </ul>

            <h2>Book App</h2>

        </div>
    )
}

export default Navbar;