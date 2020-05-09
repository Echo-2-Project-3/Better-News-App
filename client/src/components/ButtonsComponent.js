import React from "react";
import { Link } from 'react-router-dom';
import "../styles/connectedChlng.css"



function ButtonComponent({ children, ...props }) {
  console.log(children)
 // console.log(children.replace("!", "").toLowerCase().split(" ").join("-"))
  //let path = children.replace("!", "").toLowerCase().split(" ").join("-");
 // console.log("PROPS FOR BUTTON: ", path)
  return (

    <button type="button" onClick={props.handleClick} className="btn btn-primary challengeButtonStyle">
      {/* <Link to={`/challenges/${path}`} style={{ color: 'white' }}> {children}</Link> */}
      {children}
    </button>

  )

}

export default ButtonComponent;
