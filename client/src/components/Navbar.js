import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {Link} from 'react-router-dom';

function Nav() {
        return (
        
       <Navbar>
           <Link to="/">Home</Link>
           <Link to="/challenges">Challenges</Link>
           <Link to="/profilepage">Profile Page   </Link>
        </Navbar>
    )

}

export default Nav;