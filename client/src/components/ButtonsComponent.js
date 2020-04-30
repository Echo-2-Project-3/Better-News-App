import React from "react";
//import {Link} from 'react-router-dom';



function ButtonComponent({children}) {
 //   console.log(children.replace("!", "").toLowerCase().split(" ").join("-"))
 //   let path = children.replace("!", "").toLowerCase().split(" ").join("-");
    return (
        <button type="button" className="btn btn-primary">
          {/* <Link to={`challenges/${path}`} style={{color: 'white'}}> {children}</Link> */}
             {children}
        </button>
        
    )

}

export default ButtonComponent;
