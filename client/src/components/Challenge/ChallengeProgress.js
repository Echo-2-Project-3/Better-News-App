import React from "react";
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import user from '';
import data from '../../data/ChallengeInfo.json';
import "../../styles/challengeCardStyling.css";

function ChallengeProgress(props) {

  let progressPercent =  (props.point / props.total);
  let userPointTotal = progressPercent * 100;

  return (
    <div className="progressBar1">
      <ProgressBar animated variant="success" now={userPointTotal} />
      <span>{userPointTotal}% Complete</span>
    </div>
  )

}

export default ChallengeProgress;
