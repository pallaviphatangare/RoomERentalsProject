import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 



const Navbar = () => {
  return (
    <header className="header_section text-light">
      <div className="header_bottom mb-1">
        <div className="container-fluid bg-primary">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
              <span>RoomiErentals</span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item bg-primary">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item bg-primary">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item bg-primary">
                  <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item bg-primary">
                  <Link className="nav-link" to="/booking">Booking</Link>
                </li>
                <li className="nav-item bg-primary">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item bg-primary">
                  <Link className="nav-link" to="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
