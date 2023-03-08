import React from 'react';
import '../css/TrnmtDash.css';
import { Link } from 'react-router-dom';


const UserTrnmtDash = (props) => {
    
    const TId = props.TId;
    const OId = props.OId;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" >
        <div className="container">
        <Link className="nav-link text-white" to={{
                      pathname: "/usertdb",
                      state: { TId: TId,  userId: OId }
                    }}><b>user ID: {OId} DashBoard </b></Link>
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
              <Link className="nav-link text-white" to={{
                      pathname: "/userroundlist",
                      state: { TId: TId,  OId: OId }
                    }}>Round List</Link>
              </li>
              
    
              <li className="nav-item">
              <Link className="nav-link text-white" to={{
                      pathname: "/userplayerlist",
                      state: { TId: TId,  OId: OId }
                    }}>Player List</Link>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default UserTrnmtDash;
