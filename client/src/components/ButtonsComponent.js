import React from "react";

function ButtonComponent({children}) {
    return (
        <button type="button" className="btn btn-primary">
           {children}
        </button>
        
    )

}

export default ButtonComponent;
