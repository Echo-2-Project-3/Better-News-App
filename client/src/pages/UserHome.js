import React from "react";
import ButtonComponent from "../components/ButtonsComponent";

function UserHome() {
    return (
        <div id="userHome">
            <h1>Welcome User!</h1>
            <br />
            <h3>Here you can view and join new challenges, track your progress and ranking, and connect with friends.</h3>
            <br />
            <div id="userBtnDiv">
                <ButtonComponent />
            </div>

        </div>
    );
};

export default UserHome;