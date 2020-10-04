import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from "../images/logo2.png"
import fb from "../images/facebook.png"
import insta from "../images/instagram.png"
import email from "../images/email.png"
import MediaQuery from 'react-responsive'
const Footer = () => (
  <div className="footer">
    <Row>
        <Col>
        <img src={logo} className = "logo"  alt="logo"/>
        </Col>
        <Col align = "right">
        <div className ="middle-align"> 
        <MediaQuery minDeviceWidth={1024}>   
                <h1>
                    Stay Connected
                </h1>
                <a href = "https://www.facebook.com/groups/2482762308645826">
                <img  className="contacts" src={fb} alt="fb"/>
                </a>
                <a href = "https://www.instagram.com/the.mindfulminutes/">
                <img  className="contacts" src={insta} alt="insta"/>
                </a>
                <a href = "mailto: mindfulminutes.contact@gmail.com">
                <img href = "mailto: mindfulminutes.contact@gmail.com"className="contacts" src={email} alt="email"/>
                </a>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1023.9}>   
              <div>  
                <h1 className='h1mobile'>
                    Stay Connected
                </h1>
                </div>
                <div>
                <a href = "https://www.facebook.com/groups/2482762308645826">
                <img  className="contacts" src={fb} alt="fb"/>
                </a>
                <a href = "https://www.instagram.com/the.mindfulminutes/">
                <img  className="contacts" src={insta} alt="insta"/>
                </a>
                <a href = "mailto: mindfulminutes.contact@gmail.com">
                <img href = "mailto: mindfulminutes.contact@gmail.com"className="contacts" src={email} alt="email"/>
                </a>
                </div>
        </MediaQuery>        
        </div>        
        </Col>
    </Row>
  </div>
);

export default Footer;