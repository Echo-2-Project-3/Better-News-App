import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../../styles/login.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state ={ 
      signin: true
    }
  }
  //    const [email, setEmail] = useState("");
  //    const [password, setPassword] = useState("");
  componentDidMount() {
    console.log(this.props)
  }

  handleSignInCreate = () => {
    this.setState({
      signin: !this.state.signin
    })
  }
  render() {


    return (

      <div className="Login">
        <Modal show={this.props.show} >
          <Modal.Header closeButton onClick={this.props.handleClose}>
            <Modal.Title className="title">
              Please sign in to begin!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <Form.Group controlId="name">
                <FormLabel className="mandatory">
                  Name
                  <FormControl
                    autoFocus
                    value={this.props.name}
                    type="text"
                    name="name"
                    onChange={this.props.handleChange}
                  />
                </FormLabel>
              </Form.Group>
              <FormGroup controlId="email">
                <FormLabel className="mandatory">
                  Email:
                  <FormControl
                    autoFocus
                    name="email"
                    type="email"
                    value={this.props.email}
                    onChange={this.props.handleChange}
                  />
                </FormLabel>
              </FormGroup>
              <Form.Group controlId="doppelme">
                <FormLabel>
                  Doppel Me Key
                <p className="justanote">Personalize your own avatar at DoppelMe.com to get your unique "Doppel Me" key <a href="https://www.doppelme.com/" target="_blank" id="doppelLink">here.</a></p>
                  <FormControl
                    autoFocus
                    value={this.props.doppel_me}
                    type="text"
                    name="doppel_me"
                    onChange={this.props.handleChange}
                  />
                </FormLabel>

              </Form.Group>
              <FormGroup controlId="password">
                <FormLabel className="mandatory">
                  Password:
                  <FormControl
                    autoFocus
                    name="password"
                    type="password"
                    value={this.props.password}
                    onChange={this.props.handleChange}
                  />
                </FormLabel>
              </FormGroup>
              <hr />
              <div className="text-center">
              {
                (this.state.signin) &&<div> <Button
                variant="info"
                onClick={this.props.handleLogin}
                  block
                >
                  Sign In
              </Button>
              <div>
                <span onClick={this.handleSignInCreate}>Need to create an account? <strong>Click on me!</strong></span>
              </div>
              </div>
              }
              {
                (!this.state.signin) && <div><Button
                  variant="info"
                  onClick={this.props.handleSignup}
                  block
                >
                  Create Account
              </Button>
              <div>
                <span onClick={this.handleSignInCreate}>Already have an account? Click on me!</span>
              </div>
              </div>
              }
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="info" onClick={this.props.handleClose}>
              Close
              </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );

  }

}

export default SignIn;
