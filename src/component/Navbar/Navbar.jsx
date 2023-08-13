import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <div className="navbar-items">
      <h1 className='logo'>Rahul</h1>
      <ul className='nav-items'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/service"><li>Service</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="contact"><li>Contact</li></Link>
        <button className='btnnav'>Sign-In</button>
      </ul>
    </div>
    </>
  )
}

export default Navbar