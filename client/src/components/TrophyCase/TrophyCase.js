import React from "react";
// import { Link } from 'react-router-dom';
// import trophy from '../../images/trophy.png';
import "./TrophyCase.css";
import bronze from "../../images/trophies/BronzeTrophy.png";
import silver from "../../images/trophies/TrophySilver.png";
import gold from "../../images/trophies/TrophyGold.png";
import platinum from "../../images/trophies/platinumTrophy.png";
// import virus from "../../images/virus.jpg";
import shimmer1 from "./shimmer1.png";
import shimmer2 from "./shimmer2.png";
import mysteryCube from "../../animation/mysteryCube.css";
import MysteryCube1 from "../../animation/mysteryCube.js";
import MysteryCube2 from "../../animation/mysteryCube2.js";
// let success = //mysql element regarding success of a challenge;

const modalStyles = {
  window: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(100,100,100,.5)",
    zIndex: 200,
    backgroundSize: "cover",
    backdropFilter: "blur(10px)",
    transitionDuration: "2s",
    transitionProperty: "backdrop-filter ",
  },
  box: {
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate( -50%, -50%)",
    background: "rgba(0,0,0,.4)",
    transitionDuration: "5s",
    transitionProperty: "background",
    padding: "1em",
    borderRadius: "1em",
    display: "block",
    filter: "none",
  },
  form: { display: "block", width: "30em" },
};
const resetStyles = {
  window: {},
  box: { display: "none" },
  form: {},
};

function Trophy(props) {
  let checkTrophyState = (type) => {
    if(props.challenge.benchmarks &&
      props.subscription.percent_completed >=
      props.challenge.benchmarks[type]) {
        return true;
      }
      return false;
  }
  return (
    <div className="trophyCase">
      <div className="row">
        <div
          id="bronze"
          className="col-md-2 col-lg-2 trophyFrame"
          onClick={() => props.handleModal((checkTrophyState('bronze') ? bronze : ""), 'bronze')}
        >
          {!checkTrophyState('bronze') && <MysteryCube2/>}
          {checkTrophyState('bronze') && (
              <img src={shimmer1} className="shimmer1" />
            )}
          {checkTrophyState('bronze') && (
              <img src={bronze} className="trophyImage" />
            ) }
          {/* <button onClick={props.handleModal}>Click me to know more</button> */}
        </div>
        <div
          id="silver"
          className="col-md-2 col-lg-2 trophyFrame"
          onClick={() => props.handleModal(checkTrophyState('silver') ? silver : "", 'silver')}
        >
          {!checkTrophyState('silver') && <MysteryCube2/>}
          {checkTrophyState('silver') && (
              <img src={shimmer2} className="shimmer2" />
            )}
          {checkTrophyState('silver') && (
              <img src={silver} className="trophyImage" />
            )}
        </div>
        <div
          id="gold"
          className="col-md-2 col-lg-2 trophyFrame"
          onClick={() => props.handleModal(checkTrophyState('gold') ? gold : "", 'gold')}
        >
          {!checkTrophyState('gold') && <MysteryCube2/>}
          {checkTrophyState('gold') && (
              <img src={shimmer2} className="shimmer3" />
            )}
          {checkTrophyState('gold') && (
              <img src={gold} className="trophyImage" />
            )}
        </div>
        <div
          id="platinum"
          className="col-md-2 col-lg-2 trophyFrame"
          onClick={() => props.handleModal(checkTrophyState('platinum') ? platinum : "", 'platinum')}
        >
          {!checkTrophyState('platinum') && <MysteryCube1/>}
          {checkTrophyState('platinum') && (
              <img src={shimmer2} className="shimmer4" />
            )}

          {checkTrophyState('platinum') && (
              <img src={shimmer2} className="shimmer5" />
            )}

          {checkTrophyState('platinum') && (
              <img src={shimmer1} className="shimmer6" />
            )}

          {checkTrophyState('platinum') && (
              <img src={platinum} className="trophyImage" />
            )}
        </div>
      </div>
    </div>
  );
}

class TrophyCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        styles: resetStyles,
        image: "",
        content: ""
      },
    };
  }

  componentDidMount() { }

  handleModal = (image, type) => {
    console.log("Open modal");
    console.log("Any trophies in here? ", this.props.challenge.benchmarks);
    
    let modal = this.state.modal;
  
    
    if(type) {
      let trophyType = this.props.challenge.benchmarks[type]
      let subscription = this.props.subscription; 
      let percent_completed = subscription.percent_completed;
      modal.header = type.toUpperCase();
       
      // difference information 
      let diff = trophyType - percent_completed;
      if(diff > 0) {
        console.log("You need %d percent more to go", diff)
        modal.content = `You need ${trophyType}% You have ${diff}% more to go`;
      } else if( diff <=0 ) {
        modal.content = "You are a winner. Don't let anyone tell you otherwise.";
        console.log("You are a winner. Don't let anyone tell you otherwise.")
      }
    }
 

    modal.image = image;
    if (!this.state.modal.styles.window.position) {
      modal.styles = modalStyles;
    } else {
      modal.styles = resetStyles;
    }
    this.setState({
      modal: modal,
    });
  };

  // if (user.challenges.trophy == true) {

  render() {
    return (
      <>
        {/*this.state.trophyCase*/}
        <Trophy
          {...this.props}
          {...this.state}
          handleModal={this.handleModal}
          
        />

        {/* <div id="modal-window" style={this.state.modal.styles.window}>
          <div id="modal-box" style={this.state.modal.styles.box}>
            <div id="X" onClick={this.handleModal}>
              <span id="x">X</span>
            </div>
            <div id="modal-content">
              <h1>Bronze Trophy</h1>
        
            </div>
          </div>
        </div>
      </> */}

        <div id="modal-window" style={this.state.modal.styles.window}>
          <div id="modal-box" style={this.state.modal.styles.box}>
            <div id="X" onClick={this.handleModal}>
              <span id="x">X</span>
            </div>
            <div id="modal-content">
              <h4>{this.state.modal.header} Trophy</h4>
              <img style={{maxWidth: '300px'}} src={this.state.modal.image} />
              <h4>{this.state.modal.content}</h4>
           
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TrophyCase;
