import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../css/Register.css";
import axios from 'axios';
import HeaderComponent from './HeaderComponent';

import { Card, CardContent, CardHeader, TextField, Button } from '@material-ui/core';

function UserRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const [admin, setAdmin] = useState({
    // firstName: '',
    // lastName: '',
    
    emailAddress: '',
    fullName: '',
    password: '',
    username: '',
    verified: '',
    type: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {

      alert("Trying to Signup as User");
      admin.verified = false
 
    e.preventDefault();
    
    axios
      .post('http://localhost:8080/api/user/register',
       {username: admin.username, password:admin.password, fullName:admin.fullName, emailAddress: admin.emailAddress, verified: admin.verified})
      .then(() => {
        alert("Details Registered!!");
        history.push('/login');
      })
      .catch((err) => {
       
        console.log(err.status);
        setError(JSON.stringify(err.response.data));
      });
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="banner-image">
      <HeaderComponent />
      <Card className="button-css" style={{ width: '30%', margin: '9% auto', borderColor: 'rgba(0, 255, 255, 0.349)', borderStyle: 'solid', borderRadius: '8px', fontStyle: 'normal', fontFamily: 'fantasy', color: 'darkcyan' }}>
        <CardHeader title={<>User Registration</>} style={{ textAlign: 'center', color: 'black'}} />
        <CardContent>
          <form onSubmit={handleSubmit}>

            <TextField fullWidth required label="fullName" name="fullName" value={admin.fullName} onChange={handleInputChange}  />

            <TextField fullWidth required label="User Name" name="username" value={admin.username} onChange={handleInputChange}  />

            <TextField fullWidth required label="Password" name="password" type={showPassword ? 'text' : 'password'} value={admin.password} onChange={handleInputChange} InputProps={{ endAdornment: <Button onClick={togglePasswordVisibility}>{showPassword ? 'HIDE' : 'SHOW'}</Button> }} />



            <TextField fullWidth required label="Email" name="emailAddress" value={admin.emailAddress} onChange={handleInputChange}  />

            


            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" color="primary" type="submit">
                Sign Up
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      </div>
  );
}

export default UserRegister;
