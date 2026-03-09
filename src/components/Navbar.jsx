import React from "react";
import "../styles/Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Sam's Portfolio</div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;