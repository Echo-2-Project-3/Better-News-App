import React, {Component} from "react";
//import ButtonComponent from "../components/ButtonsComponent";
//import {Route} from 'react-router-dom';

//const buttonNames = ["Connect with Friends!", "Jump Right In!", "View Leaderboards!"];
//const later = "Health and Fitness!", "Children's Corner!", "Social and Staying Connected!",  "Professional!", "Home Improvements!","Self-Help and Mindfulness!", " Make a Custom Challenge!",]
import SignIn from "../components/Login.SignIn.js";
import virus from "../images/virus.jpg"



class AppWelcome extends Component {
    
  state = {
     show: true,
     email: "",
     name: "",
     password: ""
    }

   handleClose = () => this.setState({show: false});//&& keep on splash page*/
   handleShow = () => {
     //console.log("SHOW IS CALLED")
     this.setState({show: true})
    
    
    };
   handleSubmit = () => {
    
    let {email, name, password} = this.state; 
    let user = {email, name, password};
    // make Api call to end ppoint and pass user

    // making moxk to session for anyone who uses this ui 
    window.sessionStorage.setItem('user', JSON.stringify(user));
    this.setState({show: false})
    
    }; //&& route to user page
    handleChange = ({target}) => {
      let {name, value} = target; 
      this.setState({
        [name]: value
      })
    }
  render() {
      return (
      <div id="AppWelcome">
      
      <p>Welcome to Viral Growth!</p>
        
      <img src={virus} className="Virus-logo" alt="virus" height="200px" />
      <p>Please log in to get started!</p>
      <SignIn show={this.state.show} handleClose={this.handleClose} handleSubmit={this.handleSubmit} name={this.state.name} email={this.state.email} password={this.state.password} handleChange={this.handleChange}/>
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




      // {/* {this.state.avatars.map(avatar => {
      //   return (
      //     <h5 style={{ backgroundColor: "black" }}><img src={avatar.thumbnailSrc} style={{width: '250px', height: '250px'}}/> </h5>
      //   )
      // })} */}