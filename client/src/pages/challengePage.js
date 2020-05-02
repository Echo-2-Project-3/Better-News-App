import React from "react";
import { Link } from 'react-router-dom';
import ChallengeInfo from '../data/ChallengeInfo.json';
import ChallengeProgress from '../components/ChallengeProgress.js';
import TrophyCase from '../components/TrophyCase.js';
import LeaderBoards from './Leaderboard.js'

function ChallengePage() {
    return (
        <div id ="ChallengePage">
            
        {ChallengeInfo.map((ChallengeInfo) => ChallengeInfo.info)}
         
            <ChallengeProgress />
            <TrophyCase />
             
            <LeaderBoards />
     
      <p>on the challenge page</p>
        </div>
    );
}


export default ChallengePage;