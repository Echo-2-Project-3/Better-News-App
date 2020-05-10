import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppWelcome from '../../pages/Welcome/AppWelcome';
import UserHome from '../../pages/Home/UserHome';
import Navybar from "../Navbar/Navbar.js";
import ChallengesPage from "../../pages/Challenges/challengesPage";
import ChallengePage from "../../pages/Challenges/challengePage";
import ProfilePage from "../../pages/Profile/profilepage";


function NotAuthenticatedRoutes(props) {
    return (
        <>
            <h1>You're going to have login</h1>
            <AppWelcome user={props.user} handleLogin={props.handleLogin} handleChange={props.handleChange} />
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