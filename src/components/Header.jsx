import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="tech-header header">
      <nav className="navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
        <div className="container">
          <div className="navbar-expand">
            <Link className="navbar-brand" to="/">
              <img src="assets\images\mudaba\logo.png" alt="logo-mudaba" width={55} height={55} />
            </Link>
            <button
              className="navbar-toggler align-self-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/berita">
                  Berita
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ppdb">
                  PPDB
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav mr-2 d-none d-lg-flex">
              <li className="nav-item">
                <a className="nav-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
