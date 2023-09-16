import React, { useState } from "react";

export default function NavBar() {
  return (
    <nav className="nav-items">
      <h1 className="brand-name">SheSolo Test Travel Companion App</h1>
      <ul>
        {/* responsive menu */}
        <a href="#" className="toggle-button">
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </a>
      </ul>
        <ul className="nav-links">
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="/about">PROFILE</a>
          </li>
          <li>
            <a href="/contact">ABOUT</a>
          </li>
        </ul>
    </nav>
  );
}
