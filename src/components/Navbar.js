import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const image1 = process.env.PUBLIC_URL + "/images/pngwing.com.png";
  const image2 = process.env.PUBLIC_URL + "/images/pngegg.png";
  return (
    <div className="navbar">
      <div className="logo-container">
        {/* <img className="navbar-logo" src={image1} alt="anime logo" /> */}
        <img className="navbar-logo-name" src={image2}></img>
      </div>
      <div className="items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="trending">
            <li>Trending</li>
          </Link>
          <Link to="newrelease">
            <li>New Release</li>
          </Link>
          <Link to="recentupdate">
            <li>Recent Update</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
