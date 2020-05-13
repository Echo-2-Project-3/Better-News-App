import React from "react";
import { Link } from 'react-router-dom';
import  { Container, Col, Row } from 'react-bootstrap';
import trophy from "../../images/trophy.png";


function MenuBtnComponent({ children, ...props }) {  
  return (
    <div style={{textAlign: 'center'}}>
        
      <button type="button"  className="btn btn-info mb-2" >
        {children}
      </button>
      {(props.fromHome) && <span><img style={{width: '50px'}} src={trophy} /></span>}
    </div>
  )

}

export default MenuBtnComponent;



