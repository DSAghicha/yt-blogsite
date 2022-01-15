import './navbar.css'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <p id='logo'>BlogSite</p>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>My Post</li>
                <li>Log Out</li>
            </ul>
        </nav>
    )
}

export default Navbar
