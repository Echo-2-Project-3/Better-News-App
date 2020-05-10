import React, { Component } from "react";
import {useLocation} from 'react-router-dom';
//import { Link } from "react-router-dom";
import ChallengeInfo from "../../data/ChallengeInfo.json";
import ChallengeProgress from "../../components/Challenge/ChallengeProgress.js";
import TrophyCase from "../../components/TrophyCase/TrophyCase.js";
import LeaderBoards from "../Leaderboard/Leaderboard.js";
import ButtonsComponent from '../../components/Buttons/ButtonsComponent'
import ButtonComponent from "../../components/Buttons/ButtonsComponent";
import { InputGroup, FormControl, Container, Row, Col, Button } from 'react-bootstrap';
import axios from "axios";
import "../Leaderboard/Leaderboard.css";
import "../../styles/connectedChlng.css"
// import {menu} from "./challengesPage";

class ChallengePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challengeCompleted: false, 
      challenge: {
        name: ""
      },
      theChallenge: {},
      post: "",
      posts: ["Test1", "test2","test3"],
      challengeNavigation: ["Subscribe", "Leader Board"],
      leaderUsers: []
    };
  }
  
  componentDidMount() {
    
    let challengeId =  window.location.pathname.split("/")[2];
    this.getChallenge(challengeId);
    //.console.log("location", this.props.loc)
  }

  getChallenge = (challengeId) => {
    console.log("user id: ", this.props.user.id)
    let path= `/api/user/get-challenge/${this.props.user.id}/${challengeId}`
    
    //`/api/user/get-challenge/${this.props.user.id}/${challengeName}`///api/subscribed-to/${challengeName}`;
    console.log("the path", path)
    axios.get(path)
    .then(res=> {
      console.log(res); 
      
      //if()
      let challenge = res.data.challenge;
      let SubscribedTo = res.data.subscription;
      SubscribedTo.name = challenge.name;

      this.setState({
        challenge: SubscribedTo,
        theChallenge: challenge
      
      }, function() {
       axios.get(`/api/posts/${this.state.challenge.ChallengeId}`)
       .then(res=> {
         console.log("POSTS::::", res.data);
         this.setState({
           posts: res.data
         },
         this.getLeaderUsers(this.state.challenge.ChallengeId)
         )

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

  getLeaderUsers = (challengeId) => {
    console.log("challenge id to user: ", challengeId)
    axios.get(`/api/challenges/users/${challengeId}`)
    .then((response) =>  {
      this.setState({
        leaderUsers: response.data
      })
      console.log(response)
  })
  }
  
// {(this.props.user) ? this.props.user.name : null} {(this.state.challenge.name) ? this.state.challenge.name : null}
  subscribeTo = () => {
    let challengeId =  window.location.pathname.split("/")[2];
    axios.post(`/api/challenges/subscribe-to/${challengeId}/user/${this.props.user.id}`)
    .then((res) => {
      console.log("SUBWCRIBED:", res);
      let challengeId =  window.location.pathname.split("/")[2];
      this.getChallenge(challengeId);

    })
    .catch(err=>{ 
      console.log(err)
    })
    
  }

 challengeNameSpread = () => {
  let cleanedName1 =  this.state.challenge.name.replace(/-/g, ' ')
  let cleanedName2 = cleanedName1.replace(/(\b[a-z](?!\s))/g,  function(x){return x.toUpperCase() })
  return cleanedName2
 }
  leaderBoard = () => {
    console.log("LEASERS CLICK");
  }
  checkSubcribe = (el) => {
    console.log("string is: ", el)
    if(el  == "Subscribe") {
      if(this.state.theChallenge.id){
        return false;
      } 
     
    }
    return true;
  }
  render() {
    console.log("my props", this.props);
    return (
      <div id="ChallengePage">
        <br></br>
        <h6>Hi, {this.props.user.name}. This is the {this.challengeNameSpread()}.</h6>
        
        {this.props.info}
        
        <br></br>
        {(this.state.theChallenge.id) ? <ChallengeProgress  point={this.state.challenge.point} total={this.state.theChallenge.total}/> : null}
        {this.state.challengeNavigation.map(el => {
          return (
            <>
              {(this.checkSubcribe(el)) ?
              <ButtonComponent handleClick={(el == "Subscribe") ? this.subscribeTo : this.leaderBoard} >
                     {el}
                </ButtonComponent> : null
              }
            </>
                )
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

        <div className="trophycase"><TrophyCase challengeCompleted={this.state.challengeCompleted} /></div>

        <div className="leaderboard"><LeaderBoards rows={this.state.leaderUsers} /></div>
      </div>
    );

  }
}

export default ChallengePage;
