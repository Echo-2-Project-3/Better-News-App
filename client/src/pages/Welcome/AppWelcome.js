import React, { Component } from "react";
//import ButtonComponent from "../components/ButtonsComponent";
//import {Route} from 'react-router-dom';

//const buttonNames = ["Connect with Friends!", "Jump Right In!", "View Leaderboards!"];
//const later = "Health and Fitness!", "Children's Corner!", "Social and Staying Connected!",  "Professional!", "Home Improvements!","Self-Help and Mindfulness!", " Make a Custom Challenge!",]
import SignIn from "../../components/Login/Login.SignIn.js";
import logo from "../../images/sprout.png"

class AppWelcome extends Component {
    
  constructor(props){
    super(props);
    this.state = {
      show: true,
      email: "",
      name: "",
      password: "",
      doppel_me: ""
     }
  };
 

   handleClose = () => this.setState({show: false});//&& keep on splash page*/
   handleShow = () => {
     //console.log("SHOW IS CALLED")
     this.setState({show: true})
    
    
    };

    handleSignIn = () => {
      let user = {name: "", password: "", doppel_me: "", email: ""};
      user.name = this.state.name; 
      user.password = this.state.password; 
      // user.dopple_me = this.state.dopple_me; 
      // user.email = this.state.email;

      this.props.handleLogin(user);
    }


    handleChange = (event) => {
      let {name, value} = event.target;
      this.setState({
        [name]: value
      })
    }
 
  render() {
      return (  
       
              <div id="AppWelcome">
                <br></br>
                <br></br>
      <h1>Welcome to Sproso!</h1>
      <p>The app that ....blah blah blah...</p>
      <img src={logo} className="sprout-logo" alt="virus" height="200px" />
      <p>Please log in to get started!</p>
      <br></br>
      <SignIn show={this.state.show} handleClose={this.handleClose} handleLogin={this.handleSignIn} name={this.state.name} password={this.state.password} email={this.state.email} handleChange={this.handleChange}/>
      {/* <button type="button" className="btn btn-danger">
        Get Started!
        </button> */}
        
        <br />
        <button type="button" className="btn btn-info" onClick={this.handleShow}>
        Login!
      </button>
      
      <br />
   
      <br />
      <br></br>

      </div>
            
      )
       
    };
}

export default AppWelcome; 
