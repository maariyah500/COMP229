
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../src/assets/MS-Logo.jpg';
import Home from './Home';

export default function Layout() {
  return(
    <>
    
    <div id="top">

      <Link to="/" className="logo">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>

      <nav>
        <Link to="/" id="item">Home</Link>  
        <Link to="/about" id="item">About Me!</Link>   
        <Link to="/services" id="item">Services Offered</Link>  
        <Link to="/projects" id="proj">Past Projects</Link>   
        <Link to="/contact" id="contact" >Contact Me!</Link>
      </nav>

    </div>

    </>
  )
}