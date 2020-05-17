import React, { Component } from "react";
import { Link } from "react-router-dom";
//import ButtonComponent from "../components/ButtonsComponent";
//import {Route} from 'react-router-dom';
import "./Welcome.css";
import { Container, Button } from "react-bootstrap";
//const buttonNames = ["Connect with Friends!", "Jump Right In!", "View Leaderboards!"];
//const later = "Health and Fitness!", "Children's Corner!", "Social and Staying Connected!",  "Professional!", "Home Improvements!","Self-Help and Mindfulness!", " Make a Custom Challenge!",]
import SignIn from "../../components/Login/Login.SignIn.js";
import logo from "../../images/nakedSprout2.png";
// import "./welcomeAnimation.js";

import $ from "jquery";

function handleEyes(event) {
  var eye = $(".eye");
  console.log("eyeye: ", eye);
  var x, y, rad, rot;
  let eye_offset = eye.offset();
  if (eye_offset) {
    x = eye_offset.left + eye.width() / 2;
    y = eye_offset.top + eye.height() / 2;
    rad = Math.atan2(event.pageX - x, event.pageY - y);
    rot = rad * (180 / Math.PI) * -1 + 180;
    eye.css({
      "-webkit-transform": "rotate(" + rot + "deg)",
      "-moz-transform": "rotate(" + rot + "deg)",
      "-ms-transform": "rotate(" + rot + "deg)",
      transform: "rotate(" + rot + "deg)",
    });
  }
}



class AppWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      email: "",
      name: "",
      password: "",
      doppel_me: "",
    };
  }

  componentDidMount() {
    if(!this.props.user) {
      $("#root").on('mousemove', handleEyes);
    }
  }

  handleClose = () => this.setState({ show: false }); //&& keep on splash page*/
  handleShow = () => {
    //console.log("SHOW IS CALLED")
    this.setState({ show: true });
  };

  handleSignIn = () => {
    let user = { name: "", password: "", doppel_me: "", email: "" };
    user.name = this.state.name;
    user.password = this.state.password;
    user.doppel_me = this.state.doppel_me;
    user.email = this.state.email;

    this.props.handleLogin(user);
    $("#root").off("mousemove");
  };

  handleSignup = () => {
    let user = { name: "", password: "", doppel_me: "", email: "" };
    user.name = this.state.name;
    user.password = this.state.password;
    user.doppel_me = this.state.doppel_me;
    user.email = this.state.email;

    this.props.handleSignup(user);
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div id="AppWelcome">
        <br></br>
        <br></br>
        <h1>Welcome to Sproso!</h1>
        <p>
          In today's isolated world, staying motivated can be a challenge. The
          Sproso App is here to make that happen. Here, you can challenge
          yourself in a myriad of ways, from staying social to simple
          positivity. Participate with other users to see your rank on our
          leaderboards or even create your own challenge for yourself or other
          users. Here at Sproso, we want you to feel connected. Sproso:
          connecting you by challenging you.
        </p>
        <Container>
          <div className="imgDiv">
            {/* <img src={logo} alt="Sproutling" id="nakedSprout" className="entrance"/> */}
            <div
              id="ma"
              className="moveArea entrance"
              style={{ backgroundImage: "url(" + logo + ")" }}
            >
              <div className="eye" type="text"></div>
              <div className="eye" type="text"></div>
            </div>
          </div>
        </Container>

        <p>Please log in to get started!</p>
        <br></br>
        <SignIn
          show={this.state.show}
          handleClose={this.handleClose}
          handleLogin={this.handleSignIn}
          handleSignup={this.handleSignup}
          name={this.state.name}
          password={this.state.password}
          email={this.state.email}
          doppel_me={this.state.doppel_me}
          handleChange={this.handleChange}
        />

        {/* <button type="button" className="btn btn-danger">
        Get Started!
        </button> */}

        <br />
        <Link to="/">
          <Button
            type="button"
            variant="info"
            className="btn"
            style={{ marginRight: ".5em" }}
            onClick={this.handleShow}
          >
            Login!
          </Button>
        </Link>
        <Link to="/signup">
          <Button
            type="button"
            variant="info"
            className="btn"
            style={{ marginLeft: ".5em" }}
          >
            Signup!
          </Button>
        </Link>

        <br />

        <br />
        <br></br>
      </div>
    );
  }
}

export default AppWelcome;
