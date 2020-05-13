
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppWelcome from '../../pages/Welcome/AppWelcome';
import UserHome from '../../pages/Home/UserHome';
import Navybar from "../Navbar/Navbar.js";
import ChallengesPage from "../../pages/Challenges/challengesPage";
import ChallengePage from "../../pages/Challenges/challengePage";
import ProfilePage from "../../pages/Profile/profilepage";
import Signup from "../../components/Signup/Signup"
import ChallengeWebsite from "../../pages/Challenges/ChallengeWebsite";
function NotAuthenticatedRoutes(props) {
    return (
        <>
            <Route exact path="/">
                <AppWelcome user={props.user}
                handleLogin={props.handleLogin} handleChange={props.handleChange} />
            </Route>
            <Route exact path="/signup">
                <Signup user={props.user}/>
            </Route>
            <Route exact path="/challenges">
                <ChallengeWebsite />
            </Route>
            {/**Maybe put an about or any other down here */}
            <Route path="/someotherpage/path">
                
                {/*<About user={props.user}/>*/} 
            </Route>

             
        </>
    )
}
function AuthenticateRoutes(props) {
    if (!props.authenticated) {
        return <NotAuthenticatedRoutes {...props} />
    } else {
        return (
            <AuthenticatedRoutes {...props} />
        )
    }
}

export default AuthenticateRoutes;


function AuthenticatedRoutes(props) {
    return (
        <>
            <Navybar logoutUser={props.logoutUser} user={props.user} />
            <Switch>
                <Route exact path="/"><UserHome user={props.user} /></Route>
                <Route exact path="/challenges">
                    <ChallengesPage user={props.user} />
                </Route>
                <Route exact path="/challenges/:id/optimism-challenge" >
                    <ChallengePage user={props.user} challengeName="optimism-challenge" />
                </Route>
                <Route exact path="/challenges/:id/social-challenge" >
                    <ChallengePage user={props.user} challengeName="social-challenge" />
                </Route>
                <Route exact path="/challenges/:id/fitness-challenge" >
                    <ChallengePage user={props.user} challengeName="fitness-challenge" />
                </Route>
                <Route exact path="/profilepage">
                    <ProfilePage user={props.user} />
                </Route>
            </Switch>
            
        </>
    )
}   