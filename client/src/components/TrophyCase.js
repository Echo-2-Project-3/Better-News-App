import React from "react";
import { Link } from 'react-router-dom';
import trophy from '../images/trophy.png';

// let success = //mysql element regarding success of a challenge;



function TrophyCase () {
    let trophyCase;
    console.log("trophies displayed");
    // if (user.challenges.trophy == true) {
        if (true) {
        trophyCase = <img src={trophy} height= "400px"></img>
       }else {
        trophyCase = <h2>"No trophies to display yet, but go get it!"</h2>
       };
  return (
    <div>
       {trophyCase}
    </div>
  )

}

export default TrophyCase;
