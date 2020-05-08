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
import "../pages/Leaderboard.css";
// import {menu} from "./challengesPage";

class ChallengePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challengeCompleted: false, 
      challenge: {
        name: ""
      },
      post: "",
      posts: ["Test1", "test2","test3"],
      challengeNavigation: ["Subscribe", "Leader Board"]
    };
  }
  

  componentDidMount() {
    
    this.getChallenge(this.props.challengeName);
    console.log("location", this.props.loc)
  }

  getChallenge = (challengeName) => {
    let path= `/api/user/get-challenge/${this.props.user.id}/${challengeName}`///api/subscribed-to/${challengeName}`;
    console.log("the path", path)
    axios.get(path)
    .then(res=> {
      console.log(res);  
      let challenge= res.data.Challenges[0];
      let {SubscribedTo} = challenge;
      SubscribedTo.name = challenge.name;
      this.setState({
        challenge: SubscribedTo
      }, function() {
       axios.get(`/api/posts/${this.state.challenge.ChallengeId}`)
       .then(res=> {
         console.log("POSTS::::", res.data);
         this.setState({
           posts: res.data
         })

       })
       .catch(err=> {
         console.error(err);
       })
      })

      

    })
    .catch(err=> {
      console.log("err", err);
    })
  }

  handlePost = () => {
    console.log("Sending post: ", this.state.post);
    let post = {
      ChallengeId: this.state.challenge.ChallengeId,
      content: this.state.post
    }
    axios.post("/api/posts", post)
    .then(res=> {
      //let postInfo = res;

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
  
// {(this.props.user) ? this.props.user.name : null} {(this.state.challenge.name) ? this.state.challenge.name : null}
  
  render() {
    console.log("my props", this.props);
    return (
      <div id="ChallengePage">
        <h6>Hi,{this.props.user.name} , you're on the  challenge page, {this.state.challenge.name}</h6>
        
        {this.props.info}

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
          <Row>
            <div><h2>Previous Posts</h2>
           {/* // <h6 id="postsHere">{postInfo}</h6> */}
            </div>
          </Row>
        </Container> : null
      }
        {/* post stuff here */}

        {
          this.state.posts.map(post => {
          return <ul>{post.content}</ul>
          })
        }

        <div class="trophycase"><TrophyCase challengeCompleted={this.state.challengeCompleted} /></div>

        <div class="leaderboard"><LeaderBoards /></div>
      </div>
    );

  }
}

export default ChallengePage;
