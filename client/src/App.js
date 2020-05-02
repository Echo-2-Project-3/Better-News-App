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
import Nav from "./components/Navbar.js";
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
  subscribeTo = (challenge) => {
    console.log("In aubscribe to")
    let user = this.state.user;
    user.subscriptions.push(challenge);
    this.setState({
      user: user
    })

  }
  logoutUser = () => {
    window.sessionStorage.removeItem('user')
    this.setState({ user: null })
  }
  render() {
    return (
      <div className="App">
        {

          (!this.state.user) ? <AppWelcome /> :
            <div>
              <Router>
                {(this.state.user) ? <Nav logoutUser={this.logoutUser} /> : null}
                <Switch>

                  <Route exact path="/"><UserHome /></Route>

                  <Route exact path="/challenges" >
                    <ChallengesPage user={this.state.user} subscribeTo={this.subscribeTo} />
                  </Route>
                  
                  <Route exact path="/challenges/optimism-challenge" >
                    <ChallengePage user={this.state.user} subscribeTo={this.subscribeTo} />
                  </Route>

                  
                  <Route exact path="/challenges/social-challenge" >
                    <ChallengePage user={this.state.user} subscribeTo={this.subscribeTo} />
                  </Route>

                  <Route exact path="/profilepage" component={ProfilePage} />
                </Switch>

              </Router>
            </div>

        }


      </div>
    )
  }
}

export default App;
