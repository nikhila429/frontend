import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginService from '../services/LoginService';
import HeaderComponent from './HeaderComponent';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="container my-5 content text-center" id="services">
      <HeaderComponent />
      <div className="p-5">
        <h2 className="mb-5">CHOOSE YOUR PORTAL</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-5">
            <div className="card p-0 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <img src="https://replicate.delivery/pbxt/MrE607LK4mYhM5klC2dr40sfY0T8GL8GqKnnslrTCRLNO4RIA/out..jpg" className="card-img-top" style={{ height: '200px', width: '100%', objectFit: 'cover', borderRadius: '15px 15px 0 0' }}/>
              <div className="card-body">
                <h5 className="card-title font-weight-bold mb-4">User Login</h5>
                <p className="card-text mb-4">If you don't have an account, kindly sign up/register!</p>
                <Link to="/userlogin" className="btn btn-primary px-5 mr-3 mb-3">Sign In</Link>
                <Link to="/userregister" className="btn btn-outline-secondary px-4 mb-3">Register</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card p-0 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <img src="https://replicate.delivery/pbxt/4WIDKAsuh57uN5OdxfTNxpxjAxXVIL1kFZ4kkV8KPc7sO4RIA/out..jpg" className="card-img-top" style={{ height: '200px', width: '100%', objectFit: 'cover', borderRadius: '15px 15px 0 0' }}/>
              <div className="card-body">
                <h5 className="card-title font-weight-bold mb-4">Owner Login</h5>
                <p className="card-text mb-4">If you don't have an account, please contact the page admin.</p>
                <Link to="/adminlogin" className="btn btn-primary px-5 mb-3">Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    );
  }
}
