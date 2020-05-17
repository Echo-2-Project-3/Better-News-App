import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import AppWelcome from '../../pages/Welcome/AppWelcome';
import UserHome from '../../pages/Home/UserHome';
import Navybar from "../Navbar/Navbar.js";
import ChallengesPage from "../../pages/Challenges/challengesPage";
import ChallengePage from "../../pages/Challenges/challengePage";
import ProfilePage from "../../pages/Profile/profilepage";
import logo from "../../images/sprout.png"
import {Link} from 'react-router-dom';
// import LoaderButton from "../components/LoaderButton";

import {
  HelpBlock,
  FormGroup,
  FormControl,
  Form,
} from "react-bootstrap";

const modalStyles = {
  window: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(100,100,100,.5)', zIndex: 200, backgroundSize: 'cover', backdropFilter: 'blur(10px)', transitionDuration: '2s', transitionProperty: 'backdrop-filter '},
  box: { color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate( -50%, -50%)', background: 'rgba(0,0,0,.4)', transitionDuration: '5s', transitionProperty: 'background', padding: '1em', borderRadius: '1em', display: 'block', filter: 'none' },
  form: { display: 'block', width: '30em' },
};
const resetStyles = {
  window: {},
  box: { display: 'none' },
  form: {}
}

export default class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
        Doppel: "",
      },
      confirmPassword: "",
      modal: {
        styles: modalStyles
      }
    }
  }

  validateform = () => {
    return (

      // Ill be right be back ...
      this.state.user.email.length > 0 &&
      this.state.user.password.length > 0 &&
      this.state.user.confirmPassword === this.state.confirmPassword
    );
  }


  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   // do spinner stuff
  //   this.props.handleSignup(this.state.user);
  // }

  handleConfirmationSubmit = (event) => {
    event.preventDefault();
    
  }

  handleFieldChange = ({target}) => {
    let {name, value} = target;
    this.setState({
      [name]: value
    })
  }

  handleModal = () => {
    console.log("Open modal")
    let modal = this.state.modal;
    if (!(this.state.modal.styles.window.position)) {
      modal.styles = modalStyles;
    } else {
      modal.styles = resetStyles;
    }
    this.setState({
      modal: modal
    })
  }
  render() {
    return (
      <div className="signUpModal">
      <div id="modal-window" style={this.state.modal.styles.window}>
        <div id="modal-box" style={this.state.modal.styles.box}> 
        <form action="/" className="inline">
        <button className="btn btn-info">Login Page</button></form>
        <div id="X" onClick={this.handleModal}>
              <span id="x">X</span>
        </div>
        <div id="modal-form">     
        <form onSubmit={this.handleSubmit} >
        <FormGroup controlId="email" bsSize="large">
          <Form.Control type="email" placeholder="Enter email" />
          <FormControl
            autoFocus
            type="email"
            name="email"
            value={this.state.user.email}
            onChange={this.handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <Form.Control type="password" placeholder="Password" />
          <FormControl
            type="password"
            name="password"
            value={this.state.user.password}
            onChange={this.handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <Form.Control type="password" placeholder="Confirm Password" />
          <FormControl
            type="password"
            name="confirmPassword"
            onChange={this.handleFieldChange}
            value={this.state.confirmPassword}
          />
        </FormGroup> <FormGroup controlId="DoppelMe" bsSize="large">
          <Form.Control type="doppel" placeholder="Doppel Me" />
          <FormControl
            type="string"
            name="Doppel"
            onChange={this.handleFieldChange}
            value={this.state.user.Doppel}
          />
          <button className="btn btn-success">Finish Sign Up</button>
        </FormGroup>
        {/* <LoaderButton
              block
              type="submit"
              bsSize="large"
              isLoading={isLoading}
            //   disabled={!validateForm()} */}
        {/* >
              Signup */}
        {/* </LoaderButton> */}
      </form>
      </div>
      </div>

      </div>
      </div>
    );
  }
}
// export default Signup;

    