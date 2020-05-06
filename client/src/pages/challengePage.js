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
      post: ""
    };
  }

  render() {
    return (
      <div id="ChallengePage">
        <p>on the {this.props.name} challenge page</p>
        {this.props.info} //We'll need to direct this to the challenge info database later

        <ChallengeProgress />
        {["Subscribe", "Post", "Leader Board"].map(el => {
          return (<ButtonComponent>
            {el}
          </ButtonComponent>)
        })
        }

        <Container>
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
        </Container>


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
