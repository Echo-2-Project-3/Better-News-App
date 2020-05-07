import React, { Component } from "react";
import {useLocation} from 'react-router-dom';
//import { Link } from "react-router-dom";
import ChallengeInfo from "../data/ChallengeInfo.json";
import ChallengeProgress from "../components/ChallengeProgress.js";
import TrophyCase from "../components/TrophyCase.js";
import LeaderBoards from "./Leaderboard.js";
import ButtonsComponent from '../components/ButtonsComponent'
import ButtonComponent from "../components/ButtonsComponent";
import { InputGroup, FormControl, Container, Row, Col, Button } from 'react-bootstrap';
import axios from "axios";
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
  

  componentDidMount() {
    
    this.getChallenge(this.props.challengeName);
    console.log("lcation", this.props.loc)
  }

  getChallenge = (challengeName) => {
    let path= `/api/user/get-challenge/${this.props.user.id}/${challengeName}`///api/subscribed-to/${challengeName}`;
    console.log("the path", path)
    axios.get(path)
    .then(res=> {
      console.log(res);  
      let challenge= res.data.Challenges[0];
      let {SubscribedTo} = challenge;
      this.setState({
        challenge: SubscribedTo
      })
    })
    .catch(err=> {
      console.log("err", err);
    })
  }

  handlePost = () => {
    console.log("Sending post: ", this.state.post);
    let post = {
      content: this.state.post
    }
    axios.post("/api/post", post)
    .then(res=> {
      console.log(res);
    })
    .catch(err=> {
      console.log("err", err);
    })
  }

  handlePostChange = (e) => {
    let {name, value} = e.target; 
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div id="ChallengePage">
        <p>on the {this.props.name} challenge page</p>
        {this.props.info} //We'll need to direct this to the challenge info database later

        <ChallengeProgress  point={(this.state.challenge) ? this.state.challenge.point: null}/>
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
                <FormControl as="textarea" aria-label="With textarea" name="post" value={this.state.post} onChange={this.handlePostChange} />
              </InputGroup>
              <Button variant="primary" size="lg" onClick={this.handlePost} block>
                Make Post
              </Button>
            </Col>
          </Row>
        </Container> : null
      }


        {/* post stuff here */}
        <TrophyCase challengeCompleted={this.state.challengeCompleted} />

        <LeaderBoards />
      </div>
    );

  }
}

export default ChallengePage;
