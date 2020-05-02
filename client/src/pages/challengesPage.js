import React from "react";
import MenuBtnComponent from "../components/menuButtons.js"
import { Link } from 'react-router-dom';

const menu = ["Optimism Challenge", "Social Challenge"];

function ChallengesPage() {
    return (
        <div id="challengesPage">
            <h1>Welcome User!</h1>
            <br />
            <h3>Here you can view and join new challenges, track your progress and ranking, and connect with friends.</h3>
            <br />
            <div id="menuBtnDiv" >

                {
                    menu.map((menuItem) => (
                        <MenuBtnComponent> 
                            {menuItem} 
                        </MenuBtnComponent>
                    )
                    )
                }



            </div>

        </div>
    );
};

export default ChallengesPage;