import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="text-center">
          <Link to="/" className="navbar-brand">
            <div>
              <strong className="text-white">SD Mudaba Socah</strong>
            </div>
          </Link>

          <p>Shape Character be the future.</p>
        </div>

        <hr color="grey" />

        <div className="d-flex justify-content-between">
          <div className="text-white">&copy; 2023 SD Muhammadiyah Socah.</div>

          <div className="social">
            <a href="/#" data-toggle="tooltip" data-placement="bottom" title="Facebook">
              <i className="fa fa-facebook mx-2 text-white"></i>
            </a>
            <a href="/#" data-toggle="tooltip" data-placement="bottom" title="Instagram">
              <i className="fa fa-instagram mx-2 text-white"></i>
            </a>
            <a href="/#" data-toggle="tooltip" data-placement="bottom" title="Youtube">
              <i className="fa fa-youtube mx-2 text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
