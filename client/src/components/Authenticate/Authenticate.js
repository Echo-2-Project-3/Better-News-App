// import React, { Component, useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
// import AppWelcome from '../../pages/Welcome/AppWelcome';
// import UserHome from '../../pages/Home/UserHome';
// import Navybar from "../Navbar/Navbar.js";
// import ChallengesPage from "../../pages/Challenges/challengesPage";
// import ChallengePage from "../../pages/Challenges/challengePage";
// import ProfilePage from "../../pages/Profile/profilepage";
// // import LoaderButton from "../components/LoaderButton";
// import { useAppContext } from "../libs/contextLib";
// import { useFormFields } from "../libs/hooksLib";
// import { onError } from "../libs/errorLib";
// import {
//     HelpBlock,
//     FormGroup,
//     FormControl,
//     Form,
//   } from "react-bootstrap";
 
// export default function Signup () {
//     const [fields, handleFieldChange]= useFormFields({
//         email:"",
//         password:"",
//         confirmPassword:"",
//         Doppel: "",
//     });
//     const history= useHistory();
//     const [newUser, setNewUser]= useState(null);
//     const { userHasAuthenticated } = useAppContext();
//     const [isLoading, setIsLoading]= useState(false);

//   let validateform= ()=>{
//         return (
//             fields.email.length > 0 &&
//             fields.password.length > 0 &&
//             fields.password === fields.confirmPassword
//         );
//     }
   
    
//     async function handleSubmit(event){
//         event.preventDefault();

//         setIsLoading(true);
//         setNewUser("test");
//         setIsLoading(false);
//     }
    
//     async function handleConfirmationSubmit(event){
//         event.preventDefault();
//         setIsLoading(true);
//             }
//             function renderForm() {
//                 return (
//                   <form onSubmit={handleSubmit}>
//                     <FormGroup controlId="email" bsSize="large">
//                       <Form.Control type ="email" placeholder="Enter email"/>
//                       <FormControl
//                         autoFocus
//                         type="email"
//                         value={fields.email}
//                         onChange={handleFieldChange}
//                       />
//                     </FormGroup>
//                     <FormGroup controlId="password" bsSize="large">
//                     <Form.Control type="password" placeholder="Password" />
//                       <FormControl
//                         type="password"
//                         value={fields.password}
//                         onChange={handleFieldChange}
//                       />
//             </FormGroup>
//             <FormGroup controlId="confirmPassword" bsSize="large">
//             <Form.Control type="password" placeholder="Password" />
//               <FormControl
//                 type="password"
//                 onChange={handleFieldChange}
//                 value={fields.confirmPassword}
//               />
//             </FormGroup> <FormGroup controlId="DoppelMe" bsSize="large">
//             <Form.Control type="doppel" placeholder="Doppel Me" />
//               <FormControl
//                 type="string"
//                 onChange={handleFieldChange}
//                 value={fields.Doppel}
//               />
//             </FormGroup>
//             {/* <LoaderButton
//               block
//               type="submit"
//               bsSize="large"
//               isLoading={isLoading}
//             //   disabled={!validateForm()} */}
//             {/* >
//               Signup */}
//             {/* </LoaderButton> */}
//           </form>
//         );
//       }
    
//       return (
//         <div className="Signup">
//           newUser === null ? renderForm() 
//         </div>
//       );
//     }
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