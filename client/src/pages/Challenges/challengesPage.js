import React, { Component } from "react";
import MenuBtnComponent from "../../components/Buttons/menuButtons.js";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/challengePageStyle.css";
import "../../styles/textureCardBorder.css";



class ChallengesPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subscribed: [],
      completed: [],
      unsubscribed: [],
      menu: []
    }
  }


  challengesIsNotSet = () => {
    if (this.state.completed.length <= 0 && this.state.subscribed.length <= 0 && this.state.unsubscribed.length <= 0)
      return true;
    return false;
  }
  componentDidMount() {
    if (this.challengesIsNotSet) {
      this.getSubscribedChallengesList();
    }
  }

  getSubscribedChallengesList = () => {
    let def = 0;
    //axios.get("/api/subscribed-to/challenges/:challengeId/by/user/userId")
    axios.get(`/api/challenges/subscribe-to/${def}/user/${this.props.user.id}`)
      .then(resp => {
        console.log("respon get challeneds", resp);
        this.setState({
          subscribed: resp.data.subscribed,
          unsubscribed: resp.data.unsubscribed,
          completed: resp.data.completed
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  // getMenuItems = () => {
  //   axios.get("/api/challenges")
  //   .then(res => {
  //     console.log(res);
  //     this.setState({
  //       menu: res.data
  //     })

  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })
  // }

  render() {
    return (
      <div id="challengesPage">
        <div class="textureCard">
          <h1>Welcome {this.props.user.name}!</h1>
          <br />
          <h3>
            Here you can view and join new challenges, track your progress and
            ranking, and connect with friends.
          </h3>
        </div>
        <br />
        <div id="container">
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-3" id="newChallengesCol" class="textureCardBorder">
              <h4 style={{}}>New Challenges</h4>
              {this.state.unsubscribed.map((menuItem, index) => (
                <MenuBtnComponent key={index} index={index} info={menuItem.name} name={menuItem.name}>
                  <Link to={`/challenges/${menuItem.id}/${menuItem.name.toLowerCase().split(" ").join("-")}`} style={{ color: 'white' }}>
                    {menuItem.name}
                  </Link>
                </MenuBtnComponent>
              ))}
            </div>
            <div className="col-lg-2 col-md-3" id="subscribedChallengesCol" class="textureCardBorder">
              <h4 style={{}}>Your Subscriptions</h4>
              {this.state.subscribed.map((menuItem, index) => (
                <MenuBtnComponent key={index} index={index} info={menuItem.name} name={menuItem.name}>
                  <Link to={`/challenges/${menuItem.id}/${menuItem.name.toLowerCase().split(" ").join("-")}`} style={{ color: 'white' }}>
                    {menuItem.name}
                  </Link>
                </MenuBtnComponent>
              ))}

            </div>
            <div className="col-lg-2 col-md-3" id="completedChallengesCol" class="textureCardBorder">
              <h4 style={{}}>Completed Challenges</h4>
              {this.state.completed.map((menuItem, index) => (
                <MenuBtnComponent key={index} index={index} info={menuItem.name} name={menuItem.name}>
                  <Link to={`/challenges/${menuItem.id}/${menuItem.name.toLowerCase().split(" ").join("-")}`} style={{ color: 'white' }}>
                    {menuItem.name}
                  </Link>
                </MenuBtnComponent>
              ))}

            </div>
          </div>


          <br></br>
        </div>
      </div>
    );
  }
}

export default ChallengesPage;
