import React from "react";
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import user from '';
import data from '../../data/ChallengeInfo.json';
import "../../styles/challengeCardStyling.css";

function ChallengeProgress(props) {

    return (
    <div className="progressBar1">
      <ProgressBar animated variant="success" now={props.percent_completed} />
      <span>{props.percent_completed}% Complete</span>
    </div>
  )

}

export default ChallengeProgress;
