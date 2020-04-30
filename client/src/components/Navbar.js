import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {Link} from 'react-router-dom';

function Nav(props) {
        return (
        
       <Navbar>
           <Link to="/">Home</Link>
           <Link to="/challenges">Challenges</Link>
           <Link to="/profilepage">Profile Page   </Link>
           <button onClick={props.logoutUser}>Sign Out</button>
        </Navbar>
    )

}

export default Nav;