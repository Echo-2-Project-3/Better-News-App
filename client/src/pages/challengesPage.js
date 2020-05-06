import React from "react";
import MenuBtnComponent from "../components/menuButtons.js";
import { Link } from "react-router-dom";

const menu = [
  { challenge: "Optimism Challenge", path: "optimism-challenge", info: "Here's how to do the optimism challenge." },
  { challenge: "Social Challenge", path: "social-challenge", info: "here's how to do the social challenge" },
];

function ChallengesPage() {
  return (
    <div id="challengesPage">
      <h1>Welcome User!</h1>
      <br />
      <h3>
        Here you can view and join new challenges, track your progress and
        ranking, and connect with friends.
      </h3>
      <br />
      <div id="menuBtnDiv">
        {menu.map((menuItem) => (
          <Link to={`/challenges/` + menuItem.path} >
            <MenuBtnComponent index={menuItem.index} info={menuItem.info} name={menuItem.challenge} path={menuItem.path}>{menuItem.challenge}</MenuBtnComponent>
          </Link>
        ))}

        <br></br>
      </div>
    </div>
  );
}

export default ChallengesPage;
