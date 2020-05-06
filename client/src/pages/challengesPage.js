import React, {Component} from "react";
import MenuBtnComponent from "../components/menuButtons.js";
import { Link } from "react-router-dom";
import axios from "axios";

// const menu = [
//   { challenge: "Optimism Challenge", path: "optimism-challenge", info: "Here's how to do the optimism challenge." },
//   { challenge: "Social Challenge", path: "social-challenge", info: "here's how to do the social challenge" },
// ];

class ChallengesPage extends Component {
  state = {
    menu: []
  }

  componentDidMount() {
    if(this.state.menu.length <= 0) {
      this.getMenuItems();
    }
  }
  getMenuItems = () => {
    axios.get("/api/challenges")
    .then(res => {
      console.log(res);
      this.setState({
        menu: res.data
      })
     
    })
    .catch(err=>{
      console.log(err);
    })
  }

  render() {
    return (
      <div id="challengesPage">
        <h1>Welcome User!</h1>
        <br />
        <h3>
          Here you can view and join new challenges, track your progress and
          ranking, and connect with friends.
      </h3>
        <br />
        <div id="menuBtnDiv">
          {this.state.menu.map((menuItem, index) => (
           <MenuBtnComponent index={index} info={menuItem.name} name={menuItem.name}>
            <Link to={`/challenges/` + menuItem.name.toLowerCase().split(" ").join("-")} style={{color: 'white'}}>
              {menuItem.name}
            </Link>
            </MenuBtnComponent>
          ))}

          <br></br>
        </div>
      </div>
    );
  }
}

export default ChallengesPage;
