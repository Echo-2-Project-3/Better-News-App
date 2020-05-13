import React from 'react';
import "./Footer.css";
// import { Container, Row, Col } from 'reactstrap'
const Footer = props => (
    // <Container>
    //     <Row>
    //         <Col>



<div id="footer" className="container-fluid" style={{position: 'fixed', bottom: 0}}>
    <div className="row">
        <div className="col-md-12">
        <a href="https://react.js.org/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-react fa-2x"></i>
                </a>
                <a href="https://github.com/Echo-2-Project-3/Better-News-App" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-react fa-2x"></i>
                </a>
                <div className="spacer"></div>
                The Echo Team, Sproso Project, 2020
        </div>
    </div>
</div>

)

export default Footer;