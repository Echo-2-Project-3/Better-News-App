import React, { Component } from "react";
import virus from "./virus.jpg";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    avatars: [],
  };
  componentDidMount() {
    this.getAvatars();
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
          {this.state.avatars.map(avatar => {
            return (
              <h5 style={{ backgroundColor: "black" }}><img src={avatar.thumbnailSrc} style={{width: '250px', height: '250px'}}/> </h5>
            )
          })}
          
          <p>Hello User!</p>
          <p>What would you like to do today?</p>
          <button type="button" className="btn btn-warning">
            Health and Fitness!
          </button>
          <br />
          <button type="button" className="btn btn-light">
            Children's Corner!
          </button>
          <br />
          <button type="button" className="btn btn-dark">
            Art and Creativity!
          </button>
          <br />
          <button type="button" className="btn btn-success">
            Professional!
          </button>
          <br />
          <button type="button" className="btn btn-warning">
            Home Improvements!
          </button>
          <br />
          <button type="button" className="btn btn-light">
            Social and Staying Connected!
          </button>
          <br />
          <button type="button" className="btn btn-dark">
            Self-Help and Mindfulness!
          </button>
          <br />
          <button type="button" className="btn btn-success">
            Jump Right In!
          </button>
          <br />
          <button type="button" className="btn btn-warning">
            Make a Custom Challenge!
          </button>
          <br />
          <br />
          <button type="button" className="btn btn-info">
            Connect with Friends!
          </button>
          <br />
          <br />
          <button type="button" className="btn btn-danger">
            View Leaderboards!
          </button>
          <br />
          <br />
        </header>
      </div>
    );
  }
}

export default App;
