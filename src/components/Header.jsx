import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/header.css';
const Header = () => {
  return (
    <Navbar className='header' style={{backgroundColor:'#333', height:'80px'}} variant="dark">
     <img src="/src/assets/logos/Online Canteen Management System-logos_black.png" alt="Not Available" hewight="300px" width="300px"/>
    </Navbar>
  );
};

export default Header;