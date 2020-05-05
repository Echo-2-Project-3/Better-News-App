import React, { Component } from "react";
//import ButtonComponent from "../components/ButtonsComponent";
//import {Route} from 'react-router-dom';

//const buttonNames = ["Connect with Friends!", "Jump Right In!", "View Leaderboards!"];
//const later = "Health and Fitness!", "Children's Corner!", "Social and Staying Connected!",  "Professional!", "Home Improvements!","Self-Help and Mindfulness!", " Make a Custom Challenge!",]
import SignIn from "../components/Login.SignIn.js";
import virus from "../images/virus.jpg"

class AppWelcome extends Component {
    
  constructor(props){
    super(props);
    this.state = {
      show: true,
      email: "",
      name: "",
      password: "",
      dopple_me: ""
     }
  };
 

   handleClose = () => this.setState({show: false});//&& keep on splash page*/
   handleShow = () => {
     //console.log("SHOW IS CALLED")
     this.setState({show: true})
    
    
    };

    handleSignIn = () => {
      let user = {name: "", password: "", dopple_me: "", email: ""};
      user.name = this.state.name; 
      user.password = this.state.password; 
      // user.dopple_me = this.state.dopple_me; 
      // user.email = this.state.email;

      this.props.handleSubmit(user);
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
      
      <p>Welcome to Sprout!</p>
        
      <img src={virus} className="Virus-logo" alt="virus" height="200px" />
      <p>Please log in to get started!</p>
      <SignIn show={this.state.show} handleClose={this.handleClose} handleSubmit={this.handleSignIn} name={this.state.name} password={this.state.password} email={this.state.email} handleChange={this.handleChange}/>
      <button type="button" className="btn btn-danger">
        Get Started!
        </button>
        <br />
        <button type="button" className="btn btn-info" onClick={this.handleShow}>
        Login!
      </button>
      
      <br />
   
      <br />

      </div>
            
      )
       
    };
}

export default AppWelcome; 
