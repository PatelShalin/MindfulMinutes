import React from "react";
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import aboutUs from "../images/dev.png"
import Footer from './Footer'
import MediaQuery from 'react-responsive'
export default function Section() {
  return (
    <div className={"meditation"} id="aboutus">
      <div className={"section-content"} >
        <Container>
          <Row>
          <MediaQuery minDeviceWidth={1024}>  
          <Col className="col-6">  
          <Row>
            <div>
              <h4>
                Our Story:
              </h4>
              <h3>
                ABOUT US
              </h3>
            </div>
          </Row>
          <Row>
          
            <div className = {"textBlock"}>
              <h5>
                Have an inspiring idea?
              </h5>
              <h6>
                
              Contact us to join our team! Let’s work together, grow this organiztion and make an impact! 
    
              </h6>
              <h5>
              Are you a company, organization, campus club or an individual?
              </h5>
              <h6>
                
              Let’s work together! Contact us for a partnership.
We have a unique opportunity for everyone!
    
              </h6>
            </div>
          
          </Row>
          </Col>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1023.9}>   
          <Row>
            <div>
              <h4>
                Our Story:
              </h4>
              <h3>
                ABOUT US
              </h3>
            </div>
          </Row>
          <Row>
          
            <div className = {"textBlockMobile"}>
              <h5>
                Have an inspiring idea?
              </h5>
              <h6>
                
              Contact us to join our team! Let’s work together, grow this organiztion and make an impact! 
    
              </h6>
              <h5>
              Are you a company, organization, campus club or an individual?
              </h5>
              <h6>
                
              Let’s work together! Contact us for a partnership.
We have a unique opportunity for everyone!
    
              </h6>
            </div>
          
          </Row>
          </MediaQuery>
          <MediaQuery minDeviceWidth={1024}> 
          <Col className = "col-6">
            <Row>
          <Col className = "col-6">
          <img src={aboutUs} className = "devImg"  alt="monk"/>
          </Col>
          <Col className = "col-6">
          <div className ="subtitle">
              <h2 color = "black">
                Dev Parekh
              </h2>
              <h4>
                Founder
              </h4>
            </div>
          </Col>
          </Row>
          <Row>
            <div className = "text">
            <p>
            Thank you for your support and interaction with our organization. As we strive towards continuous growth and improvement, we ensure to provide an experience that helps individuals become the best versions of themselves.  It is our goal and promise to you that any affiliation that you have with Mindful Minutes will leave an everlasting smile on your face. Remember, each and everyone of you is welcome!
            </p>
            </div>
          </Row>
          </Col>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1023.9}> 
            <Row>
          <Col className = "col-6">
          <img src={aboutUs} className = "devImgmobile"  alt="monk"/>
          </Col>
          <Col className = "col-6">
          <div className ="subtitle">
              <h2 color = "black">
                Dev Parekh
              </h2>
              <h4>
                Founder
              </h4>
            </div>
          </Col>
          </Row>
          <Row>
            <div className = "text">
            <p>
            Thank you for your support and interaction with our organization. As we strive towards continuous growth and improvement, we ensure to provide an experience that helps individuals become the best versions of themselves.  It is our goal and promise to you that any affiliation that you have with Mindful Minutes will leave an everlasting smile on your face. Remember, each and everyone of you is welcome!
            </p>
            </div>
          </Row>
          </MediaQuery>
        </Row>
        </Container>
      </div>
      <Footer/>
    </div>
    
  );
}
