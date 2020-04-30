import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
// import "./Login.css";

class SignIn extends React.Component {
  //    const [email, setEmail] = useState("");
  //    const [password, setPassword] = useState("");

  state = {
    show: false,
  };

  //   validateForm = () => {
  //     return email.length > 0 && password.length > 0;
  //   };

  

  logInModal = (props) => {
    let loggedIn = props.userName;
    console.log("logInModal function running");
    if (!loggedIn) {
      this.setState((state) => ({ show: state.true }));
      //if logged in, then display page//
    } else {
      this.setState((state) => ({ show: state.false }));
    }
  };

  render() {
    const handleClose = () => this.setState((state) => ({ show: state.false } ));//&& keep on splash page*/
    const show = () => this.setState((state) => ({ show: state.true }));
    const handleSubmit = () => this.setState((state) => ({show: state.false} )); //&& route to user page

    return (
      <div className="Login">
        <Modal show={show} onClick={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Please sign in to create account and begin!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <Form.Group controlId="name" bsSize="large">
                <FormLabel>
                  Name
                  <FormControl
                    autoFocus
                    type="text"
                    name="name"
                    //onChange={(e) => setEmail(e.target.value)}
                  />
                </FormLabel>
              </Form.Group>
              <FormGroup controlId="email" bsSize="large">
                <FormLabel>
                  Email:
                  <FormControl
                    autoFocus
                    type="email"
                    //value="email"
                    //onChange={(e) => setEmail(e.target.value)}
                  />
                </FormLabel>
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <FormLabel>
                  Password:
                  <FormControl
                    autoFocus
                    //value="password"
                    //onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </FormLabel>
              </FormGroup>
              <hr />
              <Button
                variant="primary"
                type="submit"
                onClick={handleSubmit}
                block
                bsSize="large"
              >
                Sign In
              </Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SignIn;
