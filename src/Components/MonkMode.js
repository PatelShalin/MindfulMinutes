import React from "react";
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import snap from "../images/snapchat.png"
import messenger from "../images/messenger.png"
import notion from "../images/notion.png"
import zoom from "../images/zoom.png"
import AutoPlay from "./MonkSlider"
import Button from "react-bootstrap/Button"
import MediaQuery from 'react-responsive'
export default function Section() {
  return (
    <div className={"monkmode"} id="monkmode">
      <div className={"section-content"} >
        <Container>
          <Row>
            <div>
              <h4>
                A Personal Development Group:
              </h4>
              </div>
        
        </Row>
        <Row><MediaQuery minDeviceWidth={1024}>
              <div className = {"monkTitle"}>              
              <h3>
                MONK MODE &nbsp;
              </h3>
              <h5>
                The Power of Redirection
              </h5>
              </div>
              </MediaQuery>
              <MediaQuery maxDeviceWidth={1023.9}>
              <div className = {"monkTitleMobile"}>              
              <h3>
                MONK MODE &nbsp;
              </h3>
              <h5>
                The Power of Redirection
              </h5>
              </div>
              </MediaQuery>

              <div className = {"monkQuote"}>
              We aim to better our physical & mental  health by refocusing our energy from degrading habits onto better ones. 
              </div>           

            </Row>
            <Row className = {"row justify-content-center"}>
                <div className = {"apps"}>
                <MediaQuery minDeviceWidth={1024}> 
                    <Row className = {"row justify-content-center"}>
                    <div className = {"appBox"}>
                        <Col>
                       
                        <Row>
                            <Col className = "col-3">
                            <img src={snap} className="appimg" alt="snapchat"/>
                            </Col>
                            <Col >
                            <h2>Snapchat</h2>
                            <p>Capture our daily accomplishments 
& motivate each other!</p>
                            </Col>
                        </Row>
                       
                            
                        </Col>
                        </div>
                        <div className = {"appBox"}>
                        <Col>
                        <Row>
                            <Col className = "col-3">
                            <img src={messenger} className="appimg" alt="messenger"/>
                            </Col>
                            <Col >
                            <h2>Messenger</h2>
                            <p>Converse with other MONKS
& cultivate a friendly environment!</p>
                            </Col>
                        </Row>
                        </Col>
                        </div>
                       
                    </Row>
                    <Row className = {"row justify-content-center"}>
                    <div className = {"appBox"}>
                       <Col>
                       <Row>
                            <Col className = "col-3">
                            <img src={notion} className="appimg" alt="notion"/>
                            </Col>
                            <Col >
                            <h2>Notion</h2>
                            <p>An online database to track
goals & increase accountability!</p>
                            </Col>
                        </Row>

                       
                        </Col>
                         </div>
                        <div className = {"appBox"}>
                            <Col>
                            <Row>
                            <Col className = "col-3">
                            <img src={zoom} className="appimg" alt="zoom"/>
                            </Col>
                            <Col >
                            <h2>Zoom</h2>
                            <p>Weekly debrief meetings to 
share, learn & grow together!</p>
                            </Col>
                        </Row>

                        
                        </Col>
                        </div>
                    </Row>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={1023.9}> 
                   
                    <div className = {"appBoxMobile"}>
                        <Col>
                       
                        <Row>
                            <Col className = "col-3">
                            <img src={snap} className="appimg" alt="snapchat"/>
                            </Col>
                            <Col >
                            <h2>Snapchat</h2>
                            <p>Capture our daily accomplishments 
& motivate each other!</p>
                            </Col>
                        </Row>
                       
                            
                        </Col>
                        </div>
                        <div className = {"appBoxMobile"}>
                        <Col>
                        <Row>
                            <Col className = "col-3">
                            <img src={messenger} className="appimg" alt="messenger"/>
                            </Col>
                            <Col >
                            <h2>Messenger</h2>
                            <p>Converse with other MONKS
& cultivate a friendly environment!</p>
                            </Col>
                        </Row>
                        </Col>
                        </div>
                    <div className = {"appBoxMobile"}>
                       <Col>
                       <Row>
                            <Col className = "col-3">
                            <img src={notion} className="appimg" alt="notion"/>
                            </Col>
                            <Col >
                            <h2>Notion</h2>
                            <p>An online database to track
goals & increase accountability!</p>
                            </Col>
                        </Row>

                       
                        </Col>
                         </div>
                        <div className = {"appBoxMobile"}>
                            <Col>
                            <Row>
                            <Col className = "col-3">
                            <img src={zoom} className="appimg" alt="zoom"/>
                            </Col>
                            <Col >
                            <h2>Zoom</h2>
                            <p>Weekly debrief meetings to 
share, learn & grow together!</p>
                            </Col>
                        </Row>

                        
                        </Col>
                        </div>
                    </MediaQuery>  
                </div>
            </Row>
            {/* monk images carosoul */}
            <Row className = {"row justify-content-center"}>
            <h6>
                Our Monks
            </h6>
            
            </Row>
    <AutoPlay/>
    <Row className = {"row justify-content-center"}>
    <Button variant = "light" href ="https://www.instagram.com/the.mindfulminutes/"> DM US TO SIGN UP </Button> 
    </Row>
        </Container>
      </div>
    </div>
  );
}
