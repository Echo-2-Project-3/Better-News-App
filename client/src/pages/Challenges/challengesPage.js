import React, {Component} from "react";
import MenuBtnComponent from "../../components/Buttons/menuButtons.js";
import { Link } from "react-router-dom";
import axios from "axios";


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
           <MenuBtnComponent key={index} index={index} info={menuItem.name} name={menuItem.name}>
            <Link to={`/challenges/${menuItem.id}/${menuItem.name.toLowerCase().split(" ").join("-")}`} style={{color: 'white'}}>
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
