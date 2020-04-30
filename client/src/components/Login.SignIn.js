import React from "react";
import { Modal, Button} from "react-bootstrap";
import { Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
// import "./Login.css";

function SignIn (props) {
  //    const [email, setEmail] = useState("");
  //    const [password, setPassword] = useState("");
 console.log("PROPS IN SIGN IN", props);
  // state = {
  //   show: false,
  // };

  //   validateForm = () => {
  //     return email.length > 0 && password.length > 0;
  //   };

  

  // logInModal = (props) => {
  //   let loggedIn = props.userName;
  //   console.log("logInModal function running");
  //   if (!loggedIn) {
  //     this.setState((state) => ({ show: state.true }));
  //     //if logged in, then display page//
  //   } else {
  //     this.setState((state) => ({ show: state.false }));
  //   }
  // };


    // const handleClose = () => this.setState((state) => ({ show: state.false } ));//&& keep on splash page*/
    // const show = () => this.setState((state) => ({ show: state.true }));
    // const handleSubmit = () => this.setState((state) => ({show: state.false} )); //&& route to user page

    
    
    return (
      
      <div className="Login">
        <Modal show={props.show} >
          <Modal.Header closeButton onClick={props.handleClose}>
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
                    value={props.name}
                    type="text"
                    name="name"
                    onChange={props.handleChange}
                  />
                </FormLabel>
              </Form.Group>
              <FormGroup controlId="email" bsSize="large">
                <FormLabel>
                  Email: 
                  <FormControl
                    autoFocus
                    name="email"
                    type="email"
                    value={props.email}
                    onChange={props.handleChange}
                  />
                </FormLabel>
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <FormLabel>
                  Password:
                  <FormControl
                    autoFocus
                    name="password"
                    type="password"
                    value={props.password}
                    onChange={props.handleChange}
                  />
                </FormLabel>
              </FormGroup>
              <hr />
              <Button
                variant="primary"
                type="submit"
                onClick={props.handleSubmit}
                block
                bsSize="large"
              >
                Sign In
              </Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
                Close
              </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  
}

export default SignIn;
