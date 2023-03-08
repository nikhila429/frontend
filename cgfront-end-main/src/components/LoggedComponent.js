import React, { Component } from 'react';
import '../css/HeaderComponent.css';

class LoggedComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container">
          <a className="navbar-brand text-white" href="/">
            <b>CG-T</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">
                  Contact
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link text-white" href="/adminprofile">
                  Profile
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default LoggedComponent;
