import React from "react";
import ButtonComponent from "../components/ButtonsComponent";
//import {Route} from 'react-router-dom';

const buttonNames = ["Connect with Friends!", "Jump Right In!", "View Leaderboards!"];
//const later = "Health and Fitness!", "Children's Corner!", "Social and Staying Connected!",  "Professional!", "Home Improvements!","Self-Help and Mindfulness!", " Make a Custom Challenge!",]



function ConnectedChallenge(props) {
    let loggedIn = props.userName;
    //if logged in, then display page//
    let page = <h1>DEFAULT</h1>
    if (loggedIn) {
        // get stuff from db
        // pull stuff from db
            //progress in challenge, 
            //leaderboard rank
        //display those items
        page = <h1>LOGGED IN</h1>
    }

    return (
        <div id="cnctdChal">
        <h1>Connected Challenge Page</h1>
        <br />
        <h3>Welcome to the staying connected challenge!  This is a great opportunity to help maintain a community you're involved in during your stay-at-home "vacation".  Reach out to at least one member of your community at least once a day, and post the interaction here.  You must post at least once per day to finish the challenge. This awards one point per post.</h3>
        <h1>Selected Challenge</h1>
        
        {/* <Route path='challenges/connect-with-friends' component={}/> */}
        {page}

        {buttonNames.map(buttonName => {
            return (
        //            /*<p>Hello User!</p>
        // <p>What would you like to do today?</p>
       
        
        // <button type="button" className="btn btn-light">
          
        // </button>*/}
     
        // /* <ConnectedChallenge /> */

              <ButtonComponent>{buttonName}</ButtonComponent>
            )
          })} 
         
        </div>
    );
};

// function dummyConnectedChallenge() {
//   return (
//     <p>Alternate View</p>
//   )
// }



export default ConnectedChallenge;