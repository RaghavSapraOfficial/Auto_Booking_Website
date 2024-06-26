import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container footer-container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">
          © NITJ Auto Booking, 2024
        </p>

        <Link
          to="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2 svg-c" width="60" height="60">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1"
              viewBox="0 0 48 48"
              enable-background="new 0 0 48 48"
              height="4em"
              width="4em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#F44336"
                stroke-width="4"
                stroke-miterlimit="10"
                d="M7,20v-8c0-2.2,1.8-4,4-4h14c1.2,0,2.4,0.6,3.2,1.6 L35,18"
              ></path>
              <g fill="#37474F">
                <circle cx="35" cy="37" r="5"></circle>
                <circle cx="13" cy="37" r="5"></circle>
              </g>
              <path
                fill="#F44336"
                d="M40.2,17L33,14H7c-1.2,0-2,0.8-2,2v10c0,1.2,0.8,2,2,2h1c0-2.8,2.2-5,5-5s5,2.2,5,5h12c0-2.8,2.2-5,5-5 s5,2.2,5,5h1c1.2,0,2-0.8,2-2v-5.2C43,19.2,41.8,17.6,40.2,17z"
              ></path>
              <g fill="#546E7A">
                <circle cx="24" cy="37" r="3"></circle>
                <circle cx="35" cy="37" r="2"></circle>
                <circle cx="13" cy="37" r="2"></circle>
                <path d="M30.4,39c-0.3-0.6-0.4-1.3-0.4-2s0.2-1.4,0.4-2H17.6c0.3,0.6,0.4,1.3,0.4,2s-0.2,1.4-0.4,2H30.4z"></path>
              </g>
            </svg>
          </svg>
        </Link>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-body-secondary">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/pricing" className="nav-link px-2 text-body-secondary">
              Pricing
            </Link>
          </li>

          {/* <li className="nav-item">
            <Link to="/features" className="nav-link px-2 text-body-secondary">
              Features
            </Link>
          </li> */}

          <li className="nav-item">
            <Link to="/about" className="nav-link px-2 text-body-secondary">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link px-2 text-body-secondary">
              Contact
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
