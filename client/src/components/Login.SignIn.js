import React from "react";
import { Modal} from "react-bootstrap";
//import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
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

//   handleSubmit = (event) => {
//     event.preventDefault();
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
    const handleClose = () => this.setState((state) => ({ show: state.true }));
    const show = () => this.setState((state) => ({ show: state.false }));
    return (
      <div className="Login">
        {/* <form onSubmit={handleSubmit}> */}
          <Modal show={show} onClick={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Please log in to get started!</Modal.Title>
            </Modal.Header>
            {/* <Modal.Body>
              <FormGroup controlId="name" bsSize="large">
                <FormLabel>Name</FormLabel>
                <FormControl
                  autoFocus
                  type="text"
                  name="name"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup controlId="email" bsSize="large">
                <FormLabel>Email</FormLabel>
                <FormControl
                  autoFocus
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <FormLabel>Password</FormLabel>
                <FormControl
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </FormGroup>
              <Button
                block
                bsSize="large"
                disabled={!validateForm()}
                type="submit"
                // onClick={handleSubmit}
              >
                Login
              </Button>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer> */}
          </Modal>
        {/* </form> */}
      </div>
    );
  }
}

export default SignIn;
