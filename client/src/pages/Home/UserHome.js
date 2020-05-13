import React , {Component} from "react";
import MenuBtnComponent from "../../components/Buttons/menuButtons.js";
import { Link } from "react-router-dom";
import LeaderBoard from "../Leaderboard/Leaderboard.js";

import '../Leaderboard/Leaderboard.css';
import axios from "axios";

// const menu = ["Optimism Challenge", "Social Challenge"];
let captilizeFirst = (string) => { return string.charAt(0).toUpperCase() + string.slice(1); };

class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: []
    }
  }
  componentDidMount() {
    this.completedChallenges();
  }
  completedChallenges = () => {
    axios
      .get(`/api/challenges/subscribe-to/0/user/${this.props.user.id}`)
      .then(response => {
        console.log("completed challenge response: ", response);
        this.setState({
          completed: response.data.completed

        })
      })
      .catch(err => {
        console.log("NOOOOOOOOOOOOOOOOO! ", err);
      })
  }

  render() {

    return (
      <>
        <div id="userHome">
          <h1>Welcome, {captilizeFirst(this.props.user.name || "user")}.</h1>

          <br />
          <h3>Look at all the wonderful things you've accomplished together!</h3>
          <br />
          <div>
            <Link to={"/challenges/"}>
              <button>See the Challenges</button>
            </Link>
          </div>
          {/*<div className="leaderboard"><LeaderBoard /></div>*/}
        </div>

        <div id="accomplishments">
        <div id="container">
          <div className="row justify-content-center">
          {this.state.completed.map((menuItem, index) => (
            <div className="col-lg-2 col-md-3" id="newChallengesCol" class="textureCardBorder">
              <h4 style={{}}>{menuItem.name}</h4>

             
                <MenuBtnComponent key={index} index={index} info={menuItem.name} name={menuItem.name} fromHome={true}>
                  <Link to={`/challenges/${menuItem.id}/${menuItem.name.toLowerCase().split(" ").join("-")}`} style={{ color: 'white' }}>
                    {menuItem.name}
                  </Link>
                  
                </MenuBtnComponent>
             
            </div>
             ))}
          </div>


          <br></br>
        </div>
        </div>
      </>
    );
  }
}

export default UserHome;
