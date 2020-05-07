import React from "react";
import { Link } from 'react-router-dom';


function MenuBtnComponent({ children, ...props }) {  
  return (
    <div>
      <button type="button"  className="btn btn-primary mb-2" >
        {children}
      </button>
    </div>
  )

}

export default MenuBtnComponent;



