import React from "react";
import {Link} from 'react-router-dom';



function MenuBtnComponent({children, ...props}) {
//    console.log(children.replace("!", "").toLowerCase().split(" ").join("-"))
//    let path = children.replace("!", "").toLowerCase().split(" ").join("-");
//  console.log("PROPS FOR BUTTON: ", path)  
 return (
        
        <button type="button" onClick={props.subscribeTo} className="btn btn-primary">
          {/* <Link to={`/challenges/${path}`} style={{color: 'white'}}> {children}</Link> */}
          {children}
        </button>
        
    )

}

export default MenuBtnComponent;
