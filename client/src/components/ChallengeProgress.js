import React from "react";
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import user from '';
import data from '../data/ChallengeInfo.json';

// let points = user.challenges.points//user's accrued points;
let progressPercent = (points/(data[1].maxpoints)*100);

let points = 1;

function ChallengeProgress () {
    
    
    console.log("progress", progressPercent);
    
  return (
    <div>
       <ProgressBar animated variant="success" now={progressPercent.point} />
    </div>
  )

}

export default ChallengeProgress;
