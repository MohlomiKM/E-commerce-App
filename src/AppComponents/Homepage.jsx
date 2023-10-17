import React from 'react';
import {Link} from 'react-router-dom';

const Homepage = () => {
  return (
      <div className="Home-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
          <a className="navbar-brand" href="/#">
            E-Commerce App
          </a>

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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/customers" className="nav-link">
                  Customers
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  );
}

export default Homepage;
