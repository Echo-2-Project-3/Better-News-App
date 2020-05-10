import React, { Component } from "react";
import {useLocation} from 'react-router-dom';
//import { Link } from "react-router-dom";
import ChallengeInfo from "../../data/ChallengeInfo.json";
import "./Challenge.css";
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
const modalStyles = {
  window: {position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(100,100,100,.5)', zIndex: 200, backgroundSize: 'cover'},
  box: {color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0,0,0,.3)', padding: '1em', borderRadius: '1em', display: 'block'},
  form: {display: 'block', width: '30em'}
};
const resetStyles = {
          window: {},
          box: {display: 'none'},
          form: {}
}
class ChallengePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challengeCompleted: false, 
      challenge: {},
      theChallenge: { name: ""},
      post: "",
      posts: ["Test1", "test2","test3"],
      challengeNavigation: ["Subscribe", "Leader Board"],
      leaderUsers: [],
      modal: {
        styles: {
          window: {},
          box: {display: 'none'},
          form: {
          }
        },
        open: false
      }
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

      console.log("Setting the states", challenge);
      console.log(SubscribedTo)

  
      this.setState({
        challenge: (SubscribedTo) ? SubscribedTo : {},
        theChallenge: challenge, 
        modalStyle: {}
      
      }, function() {
        
        this.getPosts();
        this.getLeaderUsers(this.state.challenge.ChallengeId)
      })
    })
    .catch(err=> {
      console.log("err", err);
    })
  }

  getPosts = () => {
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
  }

  handlePost = () => {
    console.log("Sending post: ", this.state.post);
    let post = {
      UserId: this.props.user.id,
      ChallengeId: this.state.challenge.ChallengeId,
      content: this.state.post
    }
    axios.post("/api/posts", post)
    .then(res=> {
      //let postInfo = res;

      console.log(res);
      this.getPosts();
      this.handleModal();
      this.pointUpdater();
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
  let cleanedName1 =  this.state.theChallenge.name.replace(/-/g, ' ')
  let cleanedName2 = cleanedName1.replace(/(\b[a-z](?!\s))/g,  function(x){return x.toUpperCase() })
  return cleanedName2
 }
  leaderBoard = () => {
    console.log("LEASERS CLICK");
  }
  checkSubcribe = (el) => {
    console.log("string is: ", el)
    if(el  == "Subscribe") {
      if(this.state.challenge.ChallengeId){
        return false;
      } 
     
    }
    return true;
  }

  handleModal = () => {
    console.log("Open modal")
    let modal = this.state.modal;
    if(!(this.state.modal.styles.window.position)) {
      modal.styles = modalStyles;
    } else {
      modal.styles = resetStyles; 
    }
    this.setState({
      modal: modal 
    })
  }

  pointUpdater = () => {
    axios
    .get(`/api/subscribed-to/challenge/${this.state.theChallenge.id}/user/${this.props.user.id}`)
    .then(res => {
      console.log("resssss:", res)
      this.setState({
         challenge: res.data
      })
    })
    .catch(err => {
      console.log("uhoh", err);
    })

  }


  render() {
    console.log("my props", this.props);
    return (
      <div id="ChallengePage">
        <br></br>
        <h6>Hi, {this.props.user.name}. This is the {this.challengeNameSpread()}.</h6>
        
        {this.props.info}
        
        <br></br>
        {(this.state.challenge.ChallengeId) ? <ChallengeProgress  point={this.state.challenge.point} total={this.state.theChallenge.total}/> : null}
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
              <Button variant="primary" size="lg" onClick={this.handleModal} block>
                Make Post
              </Button>
              
            </Col>

          </Row>
          <Row>
          </Row>
        </Container> : null
      }
        {/* post stuff here */}
        <Container>
          <Row>
            <Col md={{span: 6, offset: 3}}>
            <div>
              <h2>Previous Posts</h2>
            </div>
                  {
                this.state.posts.map(post => {
                return (
                <div>
                  <p>
                    <h6><span style={{backgroundColor: 'rgb(79, 245, 79)'}}>created at {(new Date(post.createdAt)).toDateString()}</span></h6>
                    {post.content}
                    
                  </p>
                  
                </div>
                )
                })
              }
            </Col>
          </Row>
        </Container>


        <div className="trophycase"><TrophyCase challengeCompleted={this.state.challengeCompleted} /></div>

        <div className="leaderboard"><LeaderBoards rows={this.state.leaderUsers} /></div>
        <div id="post-modal" style={this.state.modal.styles.window}>
          <div id="post-model-box" style={this.state.modal.styles.box}>
          <div id="X" onClick={this.handleModal}>
            <span id="x">X</span>
          </div>
            <div id="post-model-form" style={this.state.modal.styles.form}>
           
              <InputGroup>
                <FormControl as="textarea" aria-label="With textarea" name="post" style={{height: '15em'}} value={this.state.post} onChange={this.handlePostChange} />
              </InputGroup>
              <button className="btn btn-primary" style={{marginTop: '1em', width: '30em'}} onClick={this.handlePost}>Button</button>
              
            
            </div>
            
          </div>
        </div>

      </div>
    );

  }
}

export default ChallengePage;
