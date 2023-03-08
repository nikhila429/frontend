import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import LandingPageComponent from './components/LandingPageComponent';
import AdminLogin from './components/AdminLogin';

import AdminTDB from './components/AdminTDB'
import TrnmtDash from './components/TrnmtDash';
import RoundList from './components/RoundList';
import MatchList from './components/MatchList';
import PRqstList from './components/PRqstList';
import UserLogin from './components/UserLogin';
import UserTDB from './components/UserTDB';
import UserRoundList from './components/UserRoundList';
import UserTrnmtDash from './components/UserTrnmtDash';
import AdminProfile from './components/AdminProfile';
import UserMatchList from './components/UserMatchList';
import PRqst from './components/PRqst';
import PlayerList from './components/PlayerList';
import UserPlayerList from './components/UserPlayerList';
import UserRegister from './components/UserRegistration';

function App() {
  return (
    <div>
        <Router>
              
                
                    <Switch> 
                    <Route exact path="/" component={LandingPageComponent} />
                    <Route exact path="/register" component={Registration} />
						              <Route exact path="/login" component={Login} />
                          <Route exact path="/admintdb" component={AdminTDB} />
                          <Route path = "/adminlogin" component = {AdminLogin}></Route>
                   
                          <Route path = "/trnmtdash" component = {TrnmtDash}></Route>
                          <Route path = "/roundlist" component = {RoundList}></Route>
                          <Route path = "/matchlist" component = {MatchList}></Route>
                          <Route path = "/prqstlist" component = {PRqstList}></Route>
                          <Route path = "/userlogin" component = {UserLogin}></Route>
                          <Route path = "/usertdb" component = {UserTDB}></Route>
                          <Route path = "/userroundlist" component = {UserRoundList}></Route>
                          <Route path = "/usertrnmtdash" component = {UserTrnmtDash}></Route>
                          <Route path = "/adminprofile" component = {AdminProfile}></Route>
                          <Route path = "/usermatchlist" component = {UserMatchList}></Route>
                          <Route path = "/prqst" component = {PRqst}></Route>
                          <Route path = "/playerlist" component = {PlayerList}></Route>
                          <Route path = "/userplayerlist" component = {UserPlayerList}></Route>
                          <Route path = "/userregister" component = {UserRegister}></Route>
                          
                          

    
                    </Switch>
                
              
        </Router>
    </div>
    
  );
}

export default App;
