import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">SkillSync</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li><button className="login-btn">Login</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
