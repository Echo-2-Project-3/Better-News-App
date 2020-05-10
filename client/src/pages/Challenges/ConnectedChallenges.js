import React from "react";
import ButtonComponent from "../../components/Buttons/ButtonsComponent";
import {Route} from 'react-router-dom';
//import {Route} from 'react-router-dom';

const buttonNames = ["Connect with Friends!", "Jump Right In!", "View Leaderboards!"];
//const later = "Health and Fitness!", "Children's Corner!", "Social and Staying Connected!",  "Professional!", "Home Improvements!","Self-Help and Mindfulness!", " Make a Custom Challenge!",]


function Jump(props) {
    let user = props.user; 
    if(user.subscriptions.includes("Jump Right In!")) {
        return <h1>Subscribed to Jump</h1>
    }

    return <h1>Want to subscribte to jump???</h1>;
}
function ConnectedChallenge(props) {

        //if logged in, then display page//
    let page;
    page =  <Jump {...props}/>



    return (
        <div id="cnctdChal">
        <h1>Connected Challenge Page</h1>
        <br />
        <h3>Welcome to the staying connected challenge!  This is a great opportunity to help maintain a community you're involved in during your stay-at-home "vacation".  Reach out to at least one member of your community at least once a day, and post the interaction here.  You must post at least once per day to finish the challenge. This awards one point per post.</h3>
        <h1>Selected Challenge</h1>
        <Route path="/challenges/jump-right-in" component={() => page}/>
        {buttonNames.map(buttonName => {
            return (
            <ButtonComponent>{buttonName}</ButtonComponent>
            )
        })
        }
        {/* <Route path='challenges/connect-with-friends' component={Jump}/> */}
        {/* {page} */}

        {/* {buttonNames.map(buttonName => {
            return (
        //           
        <div>
            /   <ButtonComponent subscribeTo={() => props.subscribeTo(buttonName)} id={buttonName}>{buttonName}</ButtonComponent>
            )
          })} 
          */}
        </div>
    );
};

// function dummyConnectedChallenge() {
//   return (
//     <p>Alternate View</p>
//   )
// }



export default ConnectedChallenge;