import React, { Component } from "react";
import virus from "./virus.jpg";
import axios from "axios";
import ConnectedChallenge from "./pages/ConnectedChallenges.js";
import ButtonComponent from "./components/ButtonsComponent.js";
import Login from "./pages/login.js"
import "./App.css";

const buttonNames = [" Health and Fitness!", "Children's Corner!", "Professional!", "Home Improvements!", "Jump Right In!", "Social and Staying Connected!", "Self-Help and Mindfulness!", " Make a Custom Challenge!", "Connect with Friends!", "View Leaderboards!"];

class App extends Component {
  state = {
    avatars: [],
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
        <header className="App-header">
        <Login/>
          <p>Welcome to Viral Growth!</p>

          <img src={virus} className="Virus-logo" alt="irus" height="200px" />
          <p>Please log in to get started!</p>
          <button type="button" className="btn btn-danger">
            Get Started!
          </button>
          <br />
          <button type="button" className="btn btn-info">
            Login!
          </button>
          <br />
          {buttonNames.map(buttonName => {
            return (
              <ButtonComponent>{buttonName}</ButtonComponent>
            )
          })}
          <br />
          {/* {this.state.avatars.map(avatar => {
            return (
              <h5 style={{ backgroundColor: "black" }}><img src={avatar.thumbnailSrc} style={{width: '250px', height: '250px'}}/> </h5>
            )
          })} */}
         
          <p>Hello User!</p>
          <p>What would you like to do today?</p>
         
          
          <button type="button" className="btn btn-light">
            
          </button>
       
          <ConnectedChallenge />
          
        </header>
      </div>
    );
  }
}

export default App;
