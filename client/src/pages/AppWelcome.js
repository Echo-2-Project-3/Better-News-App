import React from "react";
//import ButtonComponent from "../components/ButtonsComponent";
//import {Route} from 'react-router-dom';

//const buttonNames = ["Connect with Friends!", "Jump Right In!", "View Leaderboards!"];
//const later = "Health and Fitness!", "Children's Corner!", "Social and Staying Connected!",  "Professional!", "Home Improvements!","Self-Help and Mindfulness!", " Make a Custom Challenge!",]
import SignIn from "../components/Login.SignIn.js";
import virus from "../images/virus.jpg"


function AppWelcome(props) { {
    
    
    
      return (
      <div id="AppWelcome">
      
      <p>Welcome to Viral Growth!</p>

      

      <img src={virus} className="Virus-logo" alt="irus" height="200px" />
      <p>Please log in to get started!</p>
      <SignIn/>
      <button type="button" className="btn btn-danger">
        Get Started!
        </button>
        <br />
        <button type="button" className="btn btn-info">
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