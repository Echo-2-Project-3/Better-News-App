import React, { Component } from "react";
//import virus from "./virus.jpg";
import axios from "axios";
import ConnectedChallenge from "./pages/ConnectedChallenges.js";
import AppWelcome from "./pages/AppWelcome.js";
import ProfilePage from "./pages/profilepage.js";
//import ButtonComponent from "./components/ButtonsComponent.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Login from "./components/Login.SignIn.js";
import UserHome from "./pages/UserHome.js";
import Navybar from "./components/Navbar.js";
import "./styles/userHome.css";
import ChallengesPage from "./pages/challengesPage.js";
import ChallengePage from "./pages/challengePage.js";
import "./App.css";
//import SignIn from "./components/Login.SignIn.js";
import Login from './components/Login.js';
import Leaderboards from "./pages/Leaderboard.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  handleSubmit = (user) => {
    let {name} = user; 
    console.log("Logging in");
    // let {email, name, password} = this.state; 
    // let user = {email, name, password};
    axios.post(`/api/user/login`, user)
    .then((response) => {
      console.log("response: ", response)

      let user = response.data;
      window.sessionStorage.setItem('user', JSON.stringify(user));
      this.setState({user: user })
    })
    .catch((err) => {
      console.log("err", err)
    })
    // make Api call to end ppoint and pass user

    // making moxk to session for anyone who uses this ui 
   // 
   // this.setState({show: false})
    
    }; //&& route to user page
    
   

  componentDidMount() {
    let user = JSON.parse(window.sessionStorage.getItem('user'));
    if (user) {
      this.setState({
        user: user
      })
    } else {
      this.setState({
        user: null
      })
    }
  };

  logoutUser = () => {
    window.sessionStorage.removeItem('user')
    this.setState({ user: null })
  }
  render() {
    return (
      <div className="App">
        {

          (!this.state.user) ? <AppWelcome user={this.state.user} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/> :
            <div>
              <Router>
                {(this.state.user) ? <Navybar logoutUser={this.logoutUser} /> : null}
                <Switch>

                  <Route exact path="/"><UserHome user={this.state.user} /></Route>

                  <Route exact path="/challenges" >
                    <ChallengesPage user={this.state.user}/>
                  </Route>
                  
                  <Route exact path="/challenges/optimism-challenge" >
                    <ChallengePage user={this.state.user} challengeName="Optimism Challenge" subscribeTo={this.subscribeTo} />
                  </Route>

                  
                  <Route exact path="/challenges/social-challenge" >
                    <ChallengePage user={this.state.user} challengeName="Social Challenge" subscribeTo={this.subscribeTo} />
                  </Route>

                  <Route exact path="/profilepage">
                    <ProfilePage user={this.state.user}/>
                  </Route>
                </Switch>

              </Router>
            </div>

        }


      </div>
    )
  }
}

export default App;
