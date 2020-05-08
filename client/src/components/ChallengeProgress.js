import React from "react";
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import user from '';
import data from '../data/ChallengeInfo.json';
import "../styles/challengeCardStyling.css";

// let points = user.challenges.points//user's accrued points;
let progressPercent = (points / (data[1].maxpoints) * 100);

let points = 1;

function ChallengeProgress() {


  console.log("progress", progressPercent);

  return (
    <div class="progressBar1">
      <ProgressBar animated variant="success" now={progressPercent.point} />
      <span>{progressPercent.point}% Complete</span>
    </div>
  )

}

export default ChallengeProgress;
