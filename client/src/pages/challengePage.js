import React, { Component } from "react";
//import { Link } from "react-router-dom";
import ChallengeInfo from "../data/ChallengeInfo.json";
import ChallengeProgress from "../components/ChallengeProgress.js";
import TrophyCase from "../components/TrophyCase.js";
import LeaderBoards from "./Leaderboard.js";
import ButtonsComponent from '../components/ButtonsComponent'
import ButtonComponent from "../components/ButtonsComponent";
import { InputGroup, FormControl, Container, Row, Col, Button } from 'react-bootstrap';
// import {menu} from "./challengesPage";

class ChallengePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challengeCompleted: false, 
      challenge: null,
      post: "",
      challengeNavigation: ["Subscribe", "Leader Board"]
    };
  }
  // are yu there? can you hear me?
  //I'm here, but no I can't hear you. :
  // k hold on  Will do 
  //Can you hear me?
  // no, im going to try logging off and coming back in
  //gothca okee dokie I sdon't know how to spell dokie

  //can you hear me now?
  // ;-( no.... 
  //Let's restart the meeting.  I think I'll reboot my machine just in case...
  // okay, make sure everything is saved. se you in a bit
  //Will do. See you soon :)

  render() {
    return (
      <div id="ChallengePage">
        <p>on the {this.props.name} challenge page</p>
        {this.props.info} //We'll need to direct this to the challenge info database later

        <ChallengeProgress />
        {this.state.challengeNavigation.map(el => {
          return (<ButtonComponent >
                     {el}
                </ButtonComponent>)
        })
        }


        {(this.state.challenge) ?<Container>
          <Row>
            <Col md={{span: 6, offset: 3}}>
              <InputGroup>
                <FormControl as="textarea" aria-label="With textarea" value={this.state.post} />
              </InputGroup>
              <Button variant="primary" size="lg" block>
                Make Post
              </Button>
            </Col>
          </Row>
        </Container> : null
      }


        {/* post stuff here */}
        <form>
        </form>
        <TrophyCase challengeCompleted={this.state.challengeCompleted} />

        <LeaderBoards />
      </div>
    );

  }
}

export default ChallengePage;
