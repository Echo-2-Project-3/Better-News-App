import React, { Component } from "react";
import virus from "./virus.jpg";
import axios from "axios";
import ConnectedChallenge from "./pages/ConnectedChallenges.js";
import ProfilePage from "./pages/profilepage.js";
import ButtonComponent from "./components/ButtonsComponent.js";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./components/Login.SignIn.js";
import UserHome from "./pages/UserHome.js";
import Nav from "./components/Navbar.js";
import "./styles/userHome.css";
import "./App.css";



class App extends Component {
  state = {
    avatars: [],
    userName: ""
  };
  componentDidMount() {
    // this.getAvatars();
  }

  getAvatars = () => {
    axios
      .get("/api/avatar")
      .then((res) => {
        console.log("res", res);
        this.setState({
          avatars: res.data.asset_ids,
        });
      })
      .catch((err) => {
        console.log("the err", err);
      });
  };
  render() {
    return (
      <div className="App">
        <Router>
        <Nav/>
        <Switch>
          <Route exact path="/" component={UserHome}/>

          <Route path="/challenges" >
            <ConnectedChallenge userName={this.state.useName} />
          </Route>

          <Route exact path="/profilepage" component={ProfilePage}/>
        </Switch>
          
      </Router>
        <header className="App-header">
          <p>Welcome to Viral Growth!</p>

        

          <img src={virus} className="Virus-logo" alt="irus" height="200px" />
          <p>Please log in to get started!</p>
          </header>
          {/* <button type="button" className="btn btn-danger">
            Get Started!
            </button>
            <br />
            <button type="button" className="btn btn-info">
            Login!
          </button> */}
          <Login/>
          <br />
       
          <br />
          {/* {this.state.avatars.map(avatar => {
            return (
              <h5 style={{ backgroundColor: "black" }}><img src={avatar.thumbnailSrc} style={{width: '250px', height: '250px'}}/> </h5>
            )
          })} */}
         
          {/*<p>Hello User!</p>
          <p>What would you like to do today?</p>
         
          
          <button type="button" className="btn btn-light">
            
          </button>*/}
       
          {/* <ConnectedChallenge /> */}
          
      </div>

      // <Switch>
    );
  }
}

export default App;
