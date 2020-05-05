import React from "react";
import MenuBtnComponent from "../components/menuButtons.js";
import { Link } from 'react-router-dom';
import LeaderBoard from "./Leaderboard.js";


const menu = ["Optimism Challenge", "Social Challenge"];

function UserHome(props) {
    return (
        <div id="userHome">
            <h1>
            Welcome, {props.user.name || 'user'}.
            </h1>
            
            <br />
            <h3>This is a great app for the things and the stuffs.</h3>
            <br />
            <div>
            <Link to={'/challenges/'}><button>See the Challenges</button></Link>
            
            </div>
<LeaderBoard />
        </div>
    );
};

export default UserHome;