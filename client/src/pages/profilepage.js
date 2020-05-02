import React from "react";
import Avatar from "../components/Avatar.js";

function ProfilePage() {
    return (
        <div id="profileDisplay">
        <h1>Connected Profile Page</h1>
        <br />
        <Avatar/>
        <h3>Your Profile</h3>
        </div>
    );
};

export default ProfilePage;