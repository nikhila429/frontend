import React, { useState } from 'react';
import axios from 'axios';
import '../css/AdminLogin.css'
import { Card, CardContent, CardHeader, TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

const UserLogin = () => {
    const history = useHistory();
  const [showPassword, setShowPassword] = useState('');
  const [admin, setAdmin] = useState({
    username: '',
    password: '',
    userId: ''
  });
  const handleInputChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    
    try {
      const response = await axios.post(
        'http://localhost:8080/api/user/login',{username: admin.username, password:admin.password}
      );
      admin.userId = response.data.id;
      alert("Login Successful");
      
      history.push({
        pathname:'/prqst',
        state: { userId: admin.userId }
      });
     
    } catch (error) {
      alert("Login Failed - Enter Valid Credentials");
      console.log(error);
    }
  };

  return (
    <div className="banner-image">
      <HeaderComponent />
    <Card className="button-css" style={{ width: '30%', margin: '9% auto', borderColor: 'rgba(0, 255, 255, 0.349)', borderStyle: 'solid', borderRadius: '8px', fontStyle: 'normal', fontFamily: 'fantasy', color: 'brown' }}>
      <CardHeader title={<>User Login</>} style={{ textAlign: 'center', color: 'black'}} />
      <CardContent>
        <form onSubmit={handleSubmit}>


          <TextField fullWidth required label="User Name" name="username" value={admin.username} onChange={handleInputChange}  />

          

          <TextField fullWidth required label="Password" name="password" type={showPassword ? 'text' : 'password'} value={admin.password} onChange={handleInputChange} InputProps={{ endAdornment: <Button onClick={togglePasswordVisibility}>{showPassword ? 'SHOW' : 'HIDE'}</Button> }} />


          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary" type="submit">
              Sign In
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
    </div>
  );
};

export default UserLogin;
