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
      authenticated: false
    };
  }

  handleLogin = (user) => {
    let { name } = user;
    console.log("Logging in");
    // let {email, name, password} = this.state; 
    // let user = {email, name, password};
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



  componentDidMount() {
    console.log("mounting: ")
    let user = JSON.parse(window.sessionStorage.getItem('user'));
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
  }
  render() {
    return (
      <div className="App">
        <Router>
          <AuthenticateRoutes {...this.state} handleLogin={this.handleLogin} logoutUser={this.logoutUser} />
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App;
