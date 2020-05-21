import React, { Component } from "react";
//import virus from "./virus.jpg";
import axios from "axios";
import ConnectedChallenge from "./pages/Challenges/ConnectedChallenges.js";
import AppWelcome from "./pages/Welcome/AppWelcome.js";
import ProfilePage from "./pages/Profile/profilepage.js";
//import ButtonComponent from "./components/ButtonsComponent.js";
import { BrowserRouter as Router} from 'react-router-dom';

import "./styles/userHome.css";
import "./App.css";
import Footer from "./components/Footer/Footer.js"

import AuthenticateRoutes from "./components/Authenticate/"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      authenticated: false,
      canvas: null
    };
  }

  handleLogin = (user) => {  
    axios.post(`/api/user/login`, user)
      .then((response) => {
        console.log("response: ", response)

        let user = response.data;
        window.sessionStorage.setItem('user', JSON.stringify(user));
        this.setState({ user: user, authenticated: true })
      })
      .catch((err) => {
        console.log("err", err)
      })

  }; //&& route to user page

  handleSignup = (user) => {
    axios.post(`/api/user/signup/`, user)
      .then((response) => {
        console.log("response: ", response)

        //let user = response.data;
        //window.sessionStorage.setItem('user', JSON.stringify(user));
        //this.setState({ user: user, authenticated: true })
        window.location.href = "/";
      })
      .catch((err) => {
        console.log("err", err)
      })
  }

  componentDidMount() {
    console.log("mounting: ")
    let user = JSON.parse(window.sessionStorage.getItem('user'));
    let canvas = window.document.getElementsByTagName('canvas')[0];
    console.log("canvas", canvas)
    // if(!this.state.canvas) {
    //   this.setState({
    //     canvas: (canvas.toDataURL) ? canvas.toDataURL("image/png") : ''
    //   })
    // }
  
    console.log("can", canvas)
    console.log("mounting: ", user)
    if (user) {
      this.setState({
        user: user,
        authenticated: true
      })

    } else {
      this.setState({
        user: null,
        authenticated: false
      })
    }
  };

  logoutUser = () => {
    window.sessionStorage.removeItem('user')
    this.setState({ user: null, authenticated: false })
    window.location.href = "/";
  }
  render() {
    return (
      <div className="App">
        <Router>
          <AuthenticateRoutes {...this.state} handleLogin={this.handleLogin} logoutUser={this.logoutUser} handleSignup={this.handleSignup} />
         
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App;
