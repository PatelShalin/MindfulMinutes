import React from "react";
import logo from "../images/headlogo.gif";
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MediaQuery from 'react-responsive'
import currinit from "../images/AllCurrentInitiatives.png"
export default function Section({ title, dark, id }) {
  return (
    <div className={"intro"}>
      <div className="intro-content" id="intro">
      <MediaQuery minDeviceWidth={1024}>       
          <Row>
            <Col className = "col-6">
              <img src={logo} className="intro-logo" alt="Logo" />
            </Col>
            <Col className = "col-6">
              <h1>
                The Ultimate Experience
              </h1>
              <h2>Introducing the new era of personal
development and well-being.</h2>  
            </Col>
            </Row>
      </MediaQuery>
      <MediaQuery maxDeviceWidth ={1023.9}>
      <Row>
            <Col>
              <img src={logo} className="intro-logo-mobile" alt="Logo" />
            </Col>
        </Row>
      </MediaQuery>  
      <Row className = {"row justify-content-center"}>
            <img src={currinit} className="currentinit" alt="Logo" />
      </Row>  
          
      
      </div>
    </div>
  );
}
