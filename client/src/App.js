import React, { Component } from "react";
//import virus from "./virus.jpg";
import axios from "axios";
import ConnectedChallenge from "./pages/ConnectedChallenges.js";
import AppWelcome from "./pages/AppWelcome.js";
import ProfilePage from "./pages/profilepage.js";
//import ButtonComponent from "./components/ButtonsComponent.js";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import Login from "./components/Login.SignIn.js";
import UserHome from "./pages/UserHome.js";
import Nav from "./components/Navbar.js";
import "./styles/userHome.css";
import "./App.css";
//import SignIn from "./components/Login.SignIn.js";



class App extends Component {
  state = {
    
  };
  componentDidMount() {
    
  };
  render() {


    return (
      <div className="App">
        <Router>
        <Nav/>
        <Switch>
          <Route exact path="/" component ={AppWelcome}/>
          <Route exact path="/Home" component={UserHome}/>
          <Route path="/challenges" >
            <ConnectedChallenge userName={this.state.userName} />
          </Route>
          <Route exact path="/profilepage" component={ProfilePage}/>
        </Switch>
          
      </Router>
                 
      </div>

      
    );
  }
}

export default App;
