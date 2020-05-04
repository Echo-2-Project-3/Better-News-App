import React from "react";
import { Link } from 'react-router-dom';


function MenuBtnComponent({ children, ...props }) {
   // console.log("children", children)
  //    let path = children.toLowerCase().split(" ").join("-");
  //  console.log("PROPS FOR BUTTON: ", path)  
  return (
    <div>
      <button type="button" onClick={props.subscribeTo} className="btn btn-primary mb-2" >{children}
        
      </button>
    </div>
  )

}

export default MenuBtnComponent;



