import React from "react";
import MenuBtnComponent from "../../components/Buttons/menuButtons.js";
import { Link } from "react-router-dom";
import LeaderBoard from "../Leaderboard/Leaderboard.js";
import '../Leaderboard/Leaderboard.css';

// const menu = ["Optimism Challenge", "Social Challenge"];
let captilizeFirst = (string) => {return string.charAt(0).toUpperCase() + string.slice(1);};

function UserHome(props) {
  return (
    <div id="userHome">
      <h1>Welcome, {captilizeFirst(props.user.name || "user")}.</h1>

      <br />
      <h3>This is a great app for the things and the stuffs.</h3>
      <br />
      <div>
        <Link to={"/challenges/"}>
          <button>See the Challenges</button>
        </Link>
      </div>
      {/*<div className="leaderboard"><LeaderBoard /></div>*/}
    </div>
  );
}

export default UserHome;
