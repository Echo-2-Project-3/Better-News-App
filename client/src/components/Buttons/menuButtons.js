import React from "react";
import { Link } from 'react-router-dom';
import  { Container, Col, Row } from 'react-bootstrap';



function MenuBtnComponent({ children, ...props }) {  
  return (
    <div style={{textAlign: 'center'}}>
        
      <button type="button"  className="btn btn-info mb-2" >
        {children}
      </button>
    </div>
  )

}

export default MenuBtnComponent;



