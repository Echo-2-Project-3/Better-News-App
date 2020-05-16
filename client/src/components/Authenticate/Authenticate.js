
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
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
                    handleLogin={props.handleLogin} handleSignup={props.handleSignup} handleChange={props.handleChange} />
            </Route>
            <Route exact path="/signup">
                <Signup user={props.user} />
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


class AuthenticatedRoutes extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            challenges: []
        }


    }

    componentDidMount() {
        this.getChallengeNames()
    }

    getChallengeNames = () => {
        axios.get(`/api/challenges/names`)
            .then(response => {
                console.log("Get challenge names: ", response)
                this.setState({
                    challenges: response.data
                })
            })
    }

    render() {
        return (

            <>
                <Navybar logoutUser={this.props.logoutUser} user={this.props.user} />
                <Switch>
                    <Route exact path="/"><UserHome user={this.props.user} /></Route>
                    <Route exact path="/challenges">
                        <ChallengesPage user={this.props.user} />
                    </Route>
                    {this.state.challenges.map(challenge => {
                        console.log("challenge is: ", challenge)
                    return (
                        <Route exact path={`/challenges/:id/${challenge.name}`}>
                            <ChallengePage user={this.props.user} challengeName={challenge.name} />
                        </Route>
                    )
                })}
                    {/* <Route exact path="/challenges/:id/optimism-challenge" >
                        <ChallengePage user={this.props.user} challengeName="optimism-challenge" />
                    </Route>
                    <Route exact path="/challenges/:id/social-challenge" >
                        <ChallengePage user={this.props.user} challengeName="social-challenge" />
                    </Route>
                    <Route exact path="/challenges/:id/fitness-challenge" >
                        <ChallengePage user={this.props.user} challengeName="fitness-challenge" />
                    </Route> */}
                    <Route exact path="/profilepage">
                        <ProfilePage user={this.props.user} />
                    </Route>
                </Switch>

            </>
        )
    }
}   