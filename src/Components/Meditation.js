import React from "react";
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import inclimg from "../images/Inclusive.png"
import enthimg from "../images/Enthusiastic.png"
import accountimgl from "../images/AccountableLogo.png"
import Linking from "react";
import macbook from "../images/macbook.png"
import MediaQuery from 'react-responsive'
export default function Section() {
  return (
    <div className={"meditation"}  id="meditation">
      <div className={"section-content"} >
        <Container>
          <Row>
            <div>
              <h4>
                Mindful Minutes presents:
              </h4>
              <h3>
                MEDITATION SESSIONS
              </h3>
            </div>
          </Row>
          <Row>
            <Col>
            <div>
              <Row>
                <Col className = "col-1">
                  <img src={inclimg} className="med-point" alt="inclusice"/>
                </Col>
                <Col className = "col-sm-8">
                <h2>Inclusive</h2>
                <p>We are diverse. We come from different geograhpic & cultural backgrounds. Our ages vary along with our experience.</p>
                </Col>
              </Row>
              <Row>
                <Col className = "col-1">
                  <img src={accountimgl} className="med-point" alt="inclusice"/>
                </Col>
                <Col className = "col-sm-8">
                <h2>Accountable</h2>
                <p>We constantly encourage each other and create an environment of growth and accountability. A group that keeps you on track.</p>
                </Col>
              </Row>
              <Row>
                <Col className = "col-1">
                  <img src={enthimg} className="med-point" alt="inclusice"/>
                </Col>
                <Col className = "col-sm-8">
                <h2>Enthusiastic</h2>
                <p>We are always excited to meet new people and make new friends. Come out to practice daily meditation with a group full of fun and laughter.</p>
                </Col>
              </Row>
            </div>
          </Col>
            <Col>
            <MediaQuery minDeviceWidth={1024}>
              <div><img src={macbook} className="macbook" alt="macbook"/></div>
              <div className="laptop">
                <h5 >Step One: </h5>
                <h6 ><a href={"https://forms.gle/rjmRMWXhpDsWHDQ7A"}> Click here to register!</a></h6>
              </div>
              <div className = "laptop">
                <h5 >Step Two: </h5>
                <h6 >Join our daily sessions at 9pm EST!</h6>
              </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1023.9}>
              <div><img src={macbook} className="macbook-mobile" alt="macbook"/></div>
              <div className='mobile'>
                <h5 >Step One: </h5>
                <h6 ><a href={"https://forms.gle/rjmRMWXhpDsWHDQ7A"}> Click here to register!</a></h6>
              </div >
              <div className='mobile'>
                <h5 >Step Two: </h5>
                <h6 >Join our daily sessions at 9pm EST!</h6>
              </div>
            </MediaQuery>
  
              
            </Col>
          </Row>
          <Row>
            <Col>
              <div className = "med-quote">
              15 Interactive Minutes + 15 Meditation Minutes  = An Incredible Experience!
              </div>
            </Col>
          </Row>

        </Container>
      </div>
    </div>
  );
}
