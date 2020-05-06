import React from "react";
//import { Link } from "react-router-dom";
import ChallengeInfo from "../data/ChallengeInfo.json";
import ChallengeProgress from "../components/ChallengeProgress.js";
import TrophyCase from "../components/TrophyCase.js";
import LeaderBoards from "./Leaderboard.js";
// import {menu} from "./challengesPage";

function ChallengePage(...props) {
  return (
    <div id="ChallengePage">
      <p>on the {props.name} challenge page</p>
      {props.info} //We'll need to direct this to the challenge info database later

      <ChallengeProgress />
      <TrophyCase />

      <LeaderBoards />
    </div>
  );
}

export default ChallengePage;
