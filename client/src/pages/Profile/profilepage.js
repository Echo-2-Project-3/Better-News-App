import React from "react";
import Avatar from "../../components/Avatar/Avatar.js";
import {Button} from "react-bootstrap";
function ProfilePage(props) {
    return (
        <div id="profileDisplay">
        <h1>This is Your Profile Page</h1>
        <br />
        
           <h2> Account User Name: {props.user.name}</h2>
        <br/>
            <h2> Account Email: {props.user.email} </h2>
        <br/>
          <h2> Password: {props.user.password} </h2>
        <br/>
          <h2>  Dopple Me Key: <input type="text" /> </h2>
        <br/>       
           <h2> Interests: <input type="text"/> </h2>
        <br/>
            <h2> Age: <input type="text"/> </h2>
        <br/>
        <Button
              variant="info"
              onClick={props.handleSubmit}
              block
            > 
            Submit Profile Updates
        </Button>
        

        {/* <Avatar /> */}
        {/* <h3>Your Profile</h3> */}
        </div>
    );
};

export default ProfilePage;