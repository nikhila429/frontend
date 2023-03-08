import React, { Component } from 'react';
import '../css/LandingPageComponent.css'
import HeaderComponent from './HeaderComponent';

export default class LandingPageComponent extends Component {
render(){
  return (
    <React.Fragment>
      <HeaderComponent />
    <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="content text-center">
        <br /><br />
        <div className="text-size-h1 text-black text-left" style={{color:'black'}}> <b> CG-Tournament </b></div><br/>
          <p className="button-css text-black"> <b> Welcome to CG-Tournament-Manager, the ultimate platform for organizing and managing your very own tournaments,  <br /> fixtures, player rosters, and league tables! Whether you're an avid sports enthusiast or just looking for a fun way to bring people together, 
           <br /> our user-friendly interface makes it easy to create and customize your very own tournament </b> </p><br/>
  
        </div>
    </div>




</React.Fragment>

  )
}
}


